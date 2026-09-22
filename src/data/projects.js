import newsAggregator from '../assets/project-news-aggregator.png'
import internshipMgmt from '../assets/project-internship-mgmt.png'
import employeeMgmt from '../assets/project-employee-mgmt.jpg'
import retinaScan from '../assets/project-retina-scan.jpg'

const projects = [
  {
    title: 'News Aggregator',
    image: newsAggregator,
    tags: ['Frontend', 'Backend'],
    features: [
      'Pulls live headlines from multiple news APIs',
      'Category-based filtering and search',
      'Clean, responsive reading layout',
    ],
    github: 'https://github.com/Malaravan236/News_Aggregators',
  },
  {
    title: 'Internship Management System',
    image: internshipMgmt,
    tags: ['Frontend', 'Backend'],
    features: [
      'Centralized tracking of internship applications',
      'Admin & student dashboards',
      'Status updates and document management',
    ],
    github: 'https://github.com/Malaravan236/Intern_Management_System',
  },
  {
    title: 'Employee Management System',
    image: employeeMgmt,
    tags: ['Frontend', 'Backend', 'Database'],
    features: [
      'Add, update and remove employee records',
      'Role-based access for Admin & HR',
      'Attendance and leave tracking',
      'Search, filter and department-wise analytics dashboard',
    ],
    // TODO: replace with your live repo link once you push this project to GitHub
    github: 'https://github.com/Malaravan236/Employee-Management-System',
  },
  {
    title: 'RetinaScan — Diabetic Retinopathy Detection Platform',
    image: retinaScan,
    tags: ['Deep Learning', 'Full Stack'],
    features: [
      'CNN-based model classifies retinopathy severity from fundus images',
      'Django REST backend serving real-time predictions',
      'React dashboard for image upload and diagnosis history',
      'MySQL-backed patient records with downloadable reports',
    ],
    github: 'https://github.com/Malaravan236/Retina_Scan',
  },
]

export default projects

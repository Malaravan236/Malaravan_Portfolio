import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/projects'

const filters = ['All', 'Frontend', 'Backend', 'Database', 'Deep Learning', 'Full Stack']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.tags.includes(activeFilter))
  }, [activeFilter])

  return (
    <section id="projects" className="project-section">
      <p className="project-title">MY PROJECTS</p>

      <div className="heading">
        <h2>My Recent Work</h2>
      </div>

      <nav className="nav">
        {filters.map((filter) => (
          <a
            key={filter}
            href="#projects"
            className={activeFilter === filter ? 'active-filter' : ''}
            onClick={(e) => {
              e.preventDefault()
              setActiveFilter(filter)
            }}
          >
            {filter}
          </a>
        ))}
      </nav>

      <motion.div layout className="projects-container">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.features?.length > 0 && (
                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}

              {project.github && (
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <i className="ri-github-fill"></i>
                    GitHub
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

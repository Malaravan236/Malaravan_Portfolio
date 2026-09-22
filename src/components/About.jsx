import { motion } from 'framer-motion'
import aboutImage from '../assets/about-image.jpeg'

export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p id="about-eyebrow">ABOUT ME</p>

        <h2 className="who">Who Am I?</h2>

        <p className="about-desc">
          Hi, I'm Malaravan, a passionate Computer Science student with practical experience in Python full-stack
          development and deep learning. I enjoy building scalable web applications, solving real-world problems,
          and creating clean, responsive, and user-friendly digital experiences.
        </p>

        <div className="about-cards">
          <div className="card">
            <h2>4+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="card">
            <h2>9+</h2>
            <p>Technologies Learned</p>
          </div>
        </div>

        <div className="education-card">
          <h3>Education</h3>
          <p className="degree">B.E Computer Science and Engineering</p>
          <p>Kongu Engineering College, Erode, Tamil Nadu</p>
          <p>2022 - 2026</p>
        </div>
      </motion.div>

      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <div className="about-glow"></div>
        <img src={aboutImage} alt="Malaravan" />
        <h3 className="signature">Malaravan R</h3>
      </motion.div>
    </section>
  )
}

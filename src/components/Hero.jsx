import { motion } from 'framer-motion'
import heroImage from '../assets/hero-image.jpeg'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h4 className="intro" variants={item}>
          Hello, I'm 👋
        </motion.h4>

        <motion.h1 className="name" variants={item}>
          Malaravan R
        </motion.h1>

        <motion.h2 className="role" variants={item}>
          Full Stack Python Developer
        </motion.h2>

        <motion.p className="desc" variants={item}>
          I build modern responsive websites and web applications
          with clean UI and smooth user experience.
        </motion.p>

        <motion.div className="hero-buttons" variants={item}>
          <a href="#contact" className="hire-btn">
            Hire Me
            <i className="ri-arrow-right-line"></i>
          </a>

          <a href="#projects" className="work-btn">
            View My Work
            <i className="ri-external-link-line"></i>
          </a>

          <a href="/Malaravan_Python_Full_Stack.pdf" target="_blank" rel="noreferrer" className="resume-btn">
            <i className="ri-eye-line"></i>
            View My Resume
          </a>
        </motion.div>

        <motion.div className="social-icons" variants={item}>
          <a href="https://www.linkedin.com/in/malaravanr/" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-line"></i>
          </a>
          <a href="https://github.com/Malaravan236" target="_blank" rel="noreferrer">
            <i className="ri-github-line"></i>
          </a>
          <a href="https://leetcode.com/u/Malaravan236/" target="_blank" rel="noreferrer">
            <i className="devicon-leetcode-plain"></i>
          </a>
          <a href="mailto:malaravan236@gmail.com">
            <i className="ri-mail-line"></i>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
      >
        <div className="purple-glow"></div>
        <img src={heroImage} alt="Malaravan R" />
      </motion.div>
    </section>
  )
}

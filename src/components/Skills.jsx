import { motion } from 'framer-motion'
import skills from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <p className="skills-title">MY SKILLS</p>
      <h2 className="skills-heading">My Expertise</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`skill-card${skill.center ? ' center-card' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
          >
            <div className="skill-info">
              <i className={skill.icon}></i>
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.percent}%</p>
              </div>
            </div>

            <div className="Progress-bar">
              <motion.div
                className="progress"
                style={{ background: skill.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.15 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

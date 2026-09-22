import { motion } from 'framer-motion'
import certificates from '../data/certificates'

export default function Certificates() {
  return (
    <section id="certificates" className="certificate-section">
      <p className="certificate-title">MY CERTIFICATES</p>
      <h2 className="certificate-heading">Achievements &amp; Certifications</h2>

      <div className="certificate-container">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="certificate-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
          >
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to an email service (e.g. EmailJS, Formspree) or your own backend.
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="contact-title">CONTACT ME</p>
        <h2 className="contact-heading">Let's Work Together!</h2>
        <p className="contact-desc">
          Have a project in mind or want to say hello?
          <br />
          Feel free to reach out to me. I'm always open to discussing new opportunities, collaborations, and
          creative ideas.
        </p>

        <div className="contact-item">
          <i className="ri-mail-fill"></i>
          <div className="contact-details">
            <h4>Email</h4>
            <p>malaravan236@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="ri-phone-fill"></i>
          <div className="contact-details">
            <h4>Phone</h4>
            <p>+91 12345 67890</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="ri-map-pin-fill"></i>
          <div className="contact-details">
            <h4>Location</h4>
            <p>Salem, Tamil Nadu, India</p>
          </div>
        </div>

        <div className="contact-social">
          <a href="https://www.linkedin.com/in/malaravanr/" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-fill"></i>
          </a>
          <a href="https://github.com/Malaravan236" target="_blank" rel="noreferrer">
            <i className="ri-github-fill"></i>
          </a>
          <a href="https://leetcode.com/u/Malaravan236/" target="_blank" rel="noreferrer">
            <i className="devicon-leetcode-plain"></i>
          </a>
          <a href="mailto:malaravan236@gmail.com">
            <i className="ri-mail-line"></i>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="contact-right"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            {sent ? 'Message Sent ✓' : 'Send Message'}
            <i className="ri-send-plane-line"></i>
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}

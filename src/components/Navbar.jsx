import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="nav-inner">
        <h2 className="logo">
          Portfolio<span>.</span>
        </h2>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/Malaravan_Python_Full_Stack.pdf"
          download="Malaravan_Resume.pdf"
          className="download-btn"
        >
          Download CV
          <i className="ri-download-line"></i>
        </a>
      </nav>
    </motion.header>
  )
}

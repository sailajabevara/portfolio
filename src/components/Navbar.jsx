import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: '01. about', href: '#about' },
  { label: '02. skills', href: '#skills' },
  { label: '03. certifications', href: '#certifications' },
  { label: '04. projects', href: '#projects' },
  { label: '05. contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-mono text-sm text-accent font-medium tracking-widest">
            SB<span className="text-muted">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="nav-link bg-transparent border-0 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/sailajabevara"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !py-2 !px-5 !text-sm"
            >
              GitHub ↗
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 z-50"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className="hamburger-line"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}
            />
            <span
              className="hamburger-line"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="hamburger-line"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="font-display text-2xl font-bold text-light hover:text-accent transition-colors bg-transparent border-0 cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              href="https://github.com/sailajabevara"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4"
              onClick={() => setMenuOpen(false)}
            >
              GitHub ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

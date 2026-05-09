import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../components/useScrollAnimation'

const contactLinks = [
  {
    label: 'Email',
    value: 'sailajabevara2006@gmail.com',
    href: 'mailto:sailajabevara2006@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    accent: '#00F5C4',
  },
  {
    label: 'GitHub',
    value: 'github.com/sailajabevara',
    href: 'https://github.com/sailajabevara',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    accent: '#FFFFFF',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sailaja-bevara',
    href: 'https://www.linkedin.com/in/sailaja-b-799256291/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    accent: '#0A66C2',
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/sailajabevara',
    href: 'https://leetcode.com/u/sailajabevara/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    accent: '#FFA116',
  },
]

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section id="contact" className="relative py-28 bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      {/* Background accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #00F5C4 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Get in touch</span>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="accent-line" />
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-light">
              Contact
            </h2>
            <div className="accent-line" />
          </div>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            I'm actively looking for internship opportunities. Whether you have a role in mind, a project idea, or just want to connect — my inbox is open!
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <a
            href="mailto:sailajabevara2006@gmail.com"
            className="btn-primary text-lg !py-4 !px-10 glow-accent"
          >
            Say Hello 👋
          </a>
          <p className="font-mono text-xs text-muted mt-4">sailajabevara2006@gmail.com</p>
        </motion.div>

        {/* Contact link cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="card-border p-5 flex flex-col items-center text-center gap-3 no-underline group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: `${link.accent}15`,
                  color: link.accent,
                  border: `1px solid ${link.accent}30`,
                }}
              >
                {link.icon}
              </div>
              <div>
                <div className="font-display text-sm font-bold text-light group-hover:text-accent transition-colors">
                  {link.label}
                </div>
                <div className="font-mono text-xs text-muted mt-1 break-all">
                  {link.value}
                </div>
              </div>
              <div className="font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                ↗ Open
              </div>
            </motion.a>
          ))}
        </div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="font-mono text-sm text-muted">
            📞 <a href="tel:+916281756519" className="hover:text-accent transition-colors">+91 6281756519</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

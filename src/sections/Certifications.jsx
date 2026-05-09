import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../components/useScrollAnimation'

const certifications = [
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    credentialId: 'AWS-AI-2025',
    description: 'Demonstrated knowledge of AI/ML concepts and AWS AI services.',
    icon: '☁️',
  },
  {
    title: 'Google Play Store Listing',
    issuer: 'Google',
    date: '2024',
    credentialId: 'GPL-2024',
    description: 'Certified for publishing apps on Google Play Store.',
    icon: '📱',
  },
  {
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB Inc.',
    date: '2024',
    credentialId: 'MDB-AD-2024',
    description: 'Proficiency in MongoDB database design and development.',
    icon: '🍃',
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    credentialId: 'PE1-2024',
    description: 'Fundamental programming concepts using Python.',
    icon: '🐍',
  },
  {
    title: 'Programming Essentials in C (CLA)',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    credentialId: 'CLA-2023',
    description: 'C programming language fundamentals and best practices.',
    icon: '⚡',
  },
  {
    title: 'HTML & CSS IT Specialist',
    issuer: 'Certiport',
    date: '2023',
    credentialId: 'HCIS-2023',
    description: 'Web development fundamentals with HTML and CSS.',
    icon: '🌐',
  },
  {
    title: 'Google Flutter Internship',
    issuer: 'Google',
    date: '2024',
    credentialId: 'GFI-2024',
    description: 'Mobile app development with Flutter framework.',
    icon: '🎯',
  },
]

// ON-SCROLL ANIMATION — Certifications grid reveal
export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section id="certifications" className="relative py-28">
      {/* Subtle side accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-48 opacity-60"
        style={{ background: 'linear-gradient(to bottom, transparent, #00F5C4, transparent)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-tag">Achievements</span>
          <div className="flex items-center gap-4 mt-3">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-light">
              Certifications
            </h2>
            <div className="accent-line" />
          </div>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-border p-6 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{cert.icon}</span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-light mb-2">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-sm text-accent mb-1">
                    {cert.issuer}
                  </div>
                  <div className="font-mono text-xs text-muted mb-3">
                    {cert.date} • {cert.credentialId}
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
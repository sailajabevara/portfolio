import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../components/useScrollAnimation'
import profileImage from '../assets/profile.png'

const highlights = [
  { icon: '🎓', label: 'B.Tech AI/ML', sub: 'Aditya College, 2023–2027' },
  { icon: '💼', label: 'Flutter Intern', sub: 'Technical Hub Pvt Ltd' },
  { icon: '☁️', label: 'AWS Certified', sub: 'AI Practitioner' },
  { icon: '⚡', label: '140+ LeetCode', sub: 'Algorithmic problems' },
]

// ON-SCROLL ANIMATION #1 — About section fade + slide reveal
export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Subtle side accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-48 opacity-60"
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
          <span className="section-tag">Who I am</span>
          <div className="flex items-center gap-4 mt-3">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-light">
              About Me
            </h2>
            <div className="accent-line" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — avatar + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Avatar — your uploaded photo */}
            <div className="relative mb-10">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-accent/20">
                <img
                  src={profileImage}
                  alt="Sailaja Bevara"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="w-full h-full rounded-2xl flex items-center justify-center text-6xl font-display font-extrabold text-ink glow-accent hidden"
                  style={{ background: 'linear-gradient(135deg, #00F5C4, #00C49A)' }}
                  aria-label="Sailaja Bevara avatar"
                >
                  SB
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3">
                <div className="font-mono text-xs text-accent">Available for</div>
                <div className="font-display text-sm font-bold text-light">Internships 🚀</div>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="card-border p-4"
                >
                  <span className="text-2xl">{h.icon}</span>
                  <div className="font-display text-sm font-bold text-light mt-2">{h.label}</div>
                  <div className="font-mono text-xs text-muted mt-0.5">{h.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-light text-lg leading-relaxed">
              I'm <span className="text-accent font-semibold">Sailaja Bevara</span>, a motivated B.Tech student specialising in Artificial Intelligence and Machine Learning at Aditya College of Engineering and Technology, Surampalem (2023–2027).
            </p>
            <p className="text-muted leading-relaxed">
              I have hands-on experience building mobile UIs with <span className="text-light">Flutter &amp; Dart</span> — including a service-booking app and reusable widget systems from my internship at Technical Hub Pvt Ltd. I enjoy turning real-world problems into clean, working software.
            </p>
            <p className="text-muted leading-relaxed">
              Beyond mobile, I've built an <span className="text-light">offline customer support chatbot</span> using Ollama and Llama 3.2, and a <span className="text-light">DevOps simulator</span> that explores advanced Git workflows. I love working across the full stack of an idea — from prompt engineering to UI polish.
            </p>
            <p className="text-muted leading-relaxed">
              Currently I'm deepening my knowledge in <span className="text-light">AI/ML fundamentals</span>, cloud architecture, and modern frontend frameworks. I'm actively looking for internship opportunities where I can grow fast and contribute meaningfully.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { label: 'Location', value: 'Surampalem, AP' },
                { label: 'Degree', value: 'B.Tech AI/ML' },
                { label: 'Year', value: '3rd Year' },
                { label: 'Email', value: 'sailajabevara2006@gmail.com' },
              ].map((f) => (
                <div key={f.label} className="flex gap-2">
                  <span className="font-mono text-xs text-accent mt-0.5">▸</span>
                  <div>
                    <div className="font-mono text-xs text-muted">{f.label}</div>
                    <div className="font-body text-sm text-light">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex gap-4 flex-wrap">
              <a
                href="mailto:sailajabevara2006@gmail.com"
                className="btn-primary !py-3 !px-6"
              >
                Hire Me →
              </a>
              <a
                href="https://www.linkedin.com/in/sailaja-b-799256291/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !py-3 !px-6"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

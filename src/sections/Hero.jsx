import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

const roles = [
  'AI/ML Developer',
  'Flutter Developer',
  'AWS Certified',
  'Problem Solver',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* ── Parallax decorative orbs (parallax effect #1) ── */}
      <Parallax speed={-20} className="absolute inset-0 pointer-events-none">
        <div
          className="orb w-[600px] h-[600px] top-[-150px] right-[-150px] opacity-20"
          style={{ background: 'radial-gradient(circle, #00F5C4 0%, transparent 70%)' }}
        />
      </Parallax>

      <Parallax speed={15} className="absolute inset-0 pointer-events-none">
        <div
          className="orb w-[400px] h-[400px] bottom-[-100px] left-[-80px] opacity-10"
          style={{ background: 'radial-gradient(circle, #00F5C4 0%, transparent 70%)' }}
        />
      </Parallax>

      {/* Floating geometric shapes */}
      <Parallax speed={-8} className="absolute top-1/4 right-1/4 pointer-events-none hidden lg:block">
        <div className="w-16 h-16 border border-accent/20 rotate-45 animate-spin-slow" />
      </Parallax>

      <Parallax speed={10} className="absolute bottom-1/3 left-1/3 pointer-events-none hidden lg:block">
        <div className="w-8 h-8 border border-accent/30 rounded-full animate-pulse-slow" />
      </Parallax>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid gap-14 items-center lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            {/* Pre-heading tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
            <span className="section-tag">Hello, World! 👋</span>
            <span className="flex-1 h-px bg-border max-w-[80px]" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-display text-5xl md:text-7xl font-extrabold text-light leading-tight mb-2"
          >
            Sailaja
            <br />
            <span className="text-accent text-glow">Bevara</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-mono text-muted text-sm">~/</span>
            <motion.span
              key={roleIdx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-lg md:text-xl text-accent font-medium"
            >
              {roles[roleIdx]}
            </motion.span>
            <span className="w-0.5 h-6 bg-accent animate-pulse" />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="text-muted text-lg leading-relaxed mb-10 max-w-xl"
          >
            B.Tech student in <span className="text-light">Artificial Intelligence &amp; Machine Learning</span> at Aditya College of Engineering, passionate about building intelligent apps and solving real-world problems with code.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work ↓
            </button>
            <a
              href="mailto:sailajabevara2006@gmail.com"
              className="btn-outline"
            >
              Let's Talk →
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-border"
          >
            {[
              { value: '140+', label: 'LeetCode Problems' },
              { value: '6+', label: 'Certifications' },
              { value: '3+', label: 'Projects Built' },
              { value: '2025', label: 'AWS Certified' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-accent">{stat.value}</div>
                <div className="font-mono text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-[320px] mx-auto">
              <div className="overflow-hidden rounded-[2rem] border border-accent/20 bg-[#081014] shadow-[0_30px_80px_rgba(0,245,196,0.12)]">
                <img
                  src="/src/assets/profile.png"
                  alt="Sailaja Bevara"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-accent/10 p-3 text-accent text-xs font-mono border border-accent/30">
                Hello from Sailaja 👋
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-muted">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}

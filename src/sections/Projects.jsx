import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../components/useScrollAnimation'

const projects = [
  {
    id: 1,
    title: 'QuickFix',
    emoji: '🔧',
    date: 'June 2025',
    description:
      'A Flutter-based mobile application for service booking with intuitive UI flows. Features simulated location-based service listings, real-time booking workflows, in-app chat interfaces, and status/tracking screens — all built with a focus on user experience.',
    tech: ['Dart', 'Flutter', 'Material Design', 'State Management'],
    github: 'https://github.com/sailajabevara',
    accent: '#00F5C4',
    category: 'Mobile',
  },
  {
    id: 2,
    title: 'Git Mastery Challenge',
    emoji: '⚙️',
    date: 'October 2025',
    description:
      'A DevOps simulator project that demonstrates mastery of advanced Git workflows. Configured multi-remote repositories, managed complex branching strategies, and resolved merge conflicts across main, dev, and conflict-simulator branches using rebase, cherry-pick, stash, reset, revert, and tagging.',
    tech: ['Git', 'GitHub', 'DevOps', 'Shell', 'CI/CD Concepts'],
    github: 'https://github.com/sailajabevara',
    accent: '#FFB300',
    category: 'DevOps',
  },
  {
    id: 3,
    title: 'Offline Customer Support Chatbot',
    emoji: '🤖',
    date: 'March 2026',
    description:
      'An offline-first customer support chatbot powered by Ollama and Llama 3.2 that handles e-commerce queries without cloud dependency. Implemented zero-shot and one-shot prompting to improve relevance, and evaluated responses across 20+ test queries using manual scoring metrics.',
    tech: ['Python', 'Ollama', 'Llama 3.2', 'Prompt Engineering', 'NLP'],
    github: 'https://github.com/sailajabevara',
    accent: '#7C6FFF',
    category: 'AI/ML',
  },
]

const categories = ['All', 'Mobile', 'DevOps', 'AI/ML']

// ON-SCROLL ANIMATION #3 — staggered project card reveals
export default function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-28">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="section-tag">What I've built</span>
          <div className="flex items-center gap-4 mt-3">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-light">
              Projects
            </h2>
            <div className="accent-line" />
          </div>
          <p className="text-muted mt-3 max-w-xl">
            A selection of personal and academic projects that showcase my skills in mobile development, DevOps, and AI/ML.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent text-ink border-accent font-bold'
                  : 'border-border text-muted hover:border-accent/50 hover:text-light bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="card-border p-6 flex flex-col group"
            >
              {/* Card top */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}
                >
                  {project.emoji}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono text-xs px-2 py-1 rounded-full"
                    style={{ background: `${project.accent}15`, color: project.accent }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title & date */}
              <div className="mb-3">
                <h3 className="font-display text-xl font-bold text-light group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-muted">{project.date}</span>
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="skill-badge !text-xs">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View Code ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted mb-4 font-mono text-sm">More projects on GitHub →</p>
          <a
            href="https://github.com/sailajabevara"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All Repositories ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}

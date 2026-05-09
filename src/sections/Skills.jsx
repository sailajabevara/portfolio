import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../components/useScrollAnimation'

const skillGroups = [
  {
    category: 'Languages',
    icon: '⌨️',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Dart', level: 82 },
      { name: 'C++', level: 70 },
      { name: 'C', level: 68 },
    ],
  },
  {
    category: 'Frontend & Mobile',
    icon: '📱',
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'HTML', level: 88 },
      { name: 'CSS', level: 75 },
      { name: 'React', level: 65 },
    ],
  },
  {
    category: 'Data & AI',
    icon: '🤖',
    skills: [
      { name: 'Prompt Engineering', level: 78 },
      { name: 'Ollama / LLMs', level: 72 },
      { name: 'SQL', level: 75 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Docker (Basic)', level: 50 },
      { name: 'VS Code', level: 92 },
      { name: 'AWS', level: 65 },
    ],
  },
]

// ON-SCROLL ANIMATION #2 — staggered skill bars + badge reveals
export default function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section id="skills" className="relative py-28 bg-surface">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-tag">What I know</span>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="accent-line" />
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-light">
              Skills
            </h2>
            <div className="accent-line" />
          </div>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="card-border p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-display text-lg font-bold text-light">{group.category}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono text-sm text-light">{skill.name}</span>
                      <span className="font-mono text-xs text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: gi * 0.15 + si * 0.08 + 0.3, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #00C49A, #00F5C4)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted">
          Designed &amp; Built by{' '}
          <span className="text-accent">Sailaja Bevara</span>
        </div>
        <div className="font-mono text-xs text-muted">
          React + Vite + Tailwind + Framer Motion
        </div>
        <div className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} — All rights reserved
        </div>
      </div>
    </footer>
  )
}

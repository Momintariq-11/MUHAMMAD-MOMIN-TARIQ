import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'intro', label: 'Intro' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner wrap">
        <button className="nav__brand" onClick={() => go('intro')} aria-label="Back to top">
          <span className="nav__dot" aria-hidden="true" />
          <span className="mono nav__brand-text">MUHAMMAD MOMIN TARIQ</span>
        </button>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l, i) => (
            <button key={l.id} className="nav__link" onClick={() => go(l.id)}>
              <span className="mono nav__link-idx">{String(i + 1).padStart(2, '0')}</span>
              {l.label}
            </button>
          ))}
        </nav>

        <a
          className="nav__cta"
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            go('contact')
          }}
        >
          <span className="mono">CONTACT →</span>
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l, i) => (
            <button key={l.id} className="nav__mobile-link" onClick={() => go(l.id)}>
              <span className="mono nav__link-idx">{String(i + 1).padStart(2, '0')}</span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

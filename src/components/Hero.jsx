import { profile, founder } from '../data.js'

export default function Hero() {
  return (
    <section id="intro" className="hero">
      <div className="hero__rail mono" aria-hidden="true">
        <span className="hero__rail-dot" />
        <span>STATUS: AVAILABLE</span>
        <span className="hero__rail-sep">/</span>
        <span>{profile.location.toUpperCase()}</span>
      </div>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="idx">01</span> — INTRODUCTION
          </p>

          <h1 className="hero__name">
            {profile.name}
          </h1>

          <p className="hero__role mono">{profile.role}</p>

          <a className="hero__founder" href={founder.href} target="_blank" rel="noopener noreferrer">
            <img src={founder.mark} alt="" width="34" />
            <span className="mono">FOUNDER &amp; CEO, SOLVIQX</span>
            <span className="hero__founder-arrow" aria-hidden="true">↗</span>
          </a>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo-frame">
            <img
              src={profile.photo}
              alt={`${profile.name} portrait`}
              className="hero__photo"
              width="760"
              height="760"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero__photo-grid" aria-hidden="true" />
        </div>
      </div>

      <div className="hero__ticker mono" aria-hidden="true">
        <div className="hero__ticker-track">
          {Array(3).fill(0).map((_, i) => (
            <span key={i} className="hero__ticker-set">
              <span>JAVA DESKTOP DEVELOPMENT</span>
              <span className="hero__ticker-dot">●</span>
              <span>FULL-STACK DEVELOPMENT</span>
              <span className="hero__ticker-dot">●</span>
              <span>APPLIED AI / ML</span>
              <span className="hero__ticker-dot">●</span>
              <span>FOUNDER · SOLVIQX</span>
              <span className="hero__ticker-dot">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

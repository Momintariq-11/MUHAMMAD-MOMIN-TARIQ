import { profile } from '../data.js'

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
            <span className="idx">SESSION_01</span> — INTRODUCTION
          </p>

          <h1 className="hero__name">
            {profile.name}
          </h1>

          <p className="hero__role mono">{profile.role}</p>

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
            <img src={profile.photo} alt={`${profile.name} portrait`} className="hero__photo" />
            <span className="hero__photo-tag mono">FOUND.jpg</span>
          </div>
          <div className="hero__photo-grid" aria-hidden="true" />
        </div>
      </div>

      <div className="hero__ticker mono" aria-hidden="true">
        <div className="hero__ticker-track">
          {Array(3).fill(0).map((_, i) => (
            <span key={i} className="hero__ticker-set">
              <span>IOS APP DEVELOPMENT</span>
              <span className="hero__ticker-dot">●</span>
              <span>JAVA DESKTOP DEVELOPMENT</span>
              <span className="hero__ticker-dot">●</span>
              <span>FULL-STACK DEVELOPMENT</span>
              <span className="hero__ticker-dot">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

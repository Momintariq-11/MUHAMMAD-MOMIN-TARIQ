import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">
            <span className="idx">03</span> — PROJECTS
          </p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-sub">
           
            <a
              href="https://github.com/Momintariq-11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
            </a>
          
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-card__top">
                <span className="mono project-card__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="mono project-card__tag">{p.tag}</span>
              </div>

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>

              <div className="project-card__stack">
                {p.stack.map((s) => (
                  <span key={s} className="mono project-card__pill">
                    {s}
                  </span>
                ))}
              </div>

              <span className="project-card__link mono">
                VIEW REPOSITORY
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

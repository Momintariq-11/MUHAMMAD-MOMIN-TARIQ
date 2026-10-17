import { founder } from '../data.js'

export default function Founder() {
  return (
    <section id="founder" className="section founder">
      <div className="wrap founder__grid">
        <div className="founder__intro" data-reveal>
          <p className="eyebrow eyebrow--em">
            <span className="idx">02</span> — FOUNDER
          </p>
          <img className="founder__logo" src={founder.logo} alt="SOLVIQX" width="300" />
          <h2 className="section-title founder__title">
            Founder of <span className="text-em">SOLVIQX</span>
          </h2>
          <p className="founder__text">{founder.text}</p>
          <div className="founder__actions">
            <a className="btn btn--em" href={founder.href} target="_blank" rel="noopener noreferrer">
              Visit solviqx.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn--ghost" href={founder.linkedin} target="_blank" rel="noopener noreferrer">
              SOLVIQX on LinkedIn
            </a>
          </div>
        </div>

        <div className="founder__tiles assemble" data-reveal>
          {founder.services.map((s, i) => (
            <div className="asm" style={{ '--i': i }} key={s.title}>
              <article className="tile">
                <span className="mono tile__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="tile__title">{s.title}</h3>
                <p className="tile__text">{s.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">
            <span className="idx">05</span> — EXPERIENCE
          </p>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-sub">
         
          </p>
        </div>

        <div className="timeline">
          {experience.map((e, i) => (
            <div className="timeline__row" key={i} data-reveal>
              <div className="timeline__marker">
                <span className="timeline__dot" />
                {i !== experience.length - 1 && <span className="timeline__line" />}
              </div>
              <div className="timeline__content">
                <span className="mono timeline__period">{e.period}</span>
                <h3 className="timeline__role">{e.role}</h3>
                <p className="timeline__org">{e.org}</p>
                <ul className="timeline__points">
                  {(e.points || []).map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

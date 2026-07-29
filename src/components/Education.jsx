import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section education">
      <span className="index-mark mono">EDU</span>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">
            <span className="idx">SESSION_05</span> — EDUCATION
          </p>
          <h2 className="section-title">Academic background</h2>
          <p className="section-sub">
            Edit <code className="mono inline-code">src/data.js</code> → <code className="mono inline-code">education</code> with your real history.
          </p>
        </div>

        <div className="edu__list">
          {education.map((e, i) => (
            <div className="edu__card" key={i}>
              <span className="mono edu__period">{e.period}</span>
              <h3 className="edu__degree">{e.degree}</h3>
              <p className="edu__institution">{e.institution}</p>
              <p className="edu__detail">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section education">
      <span className="index-mark mono">EDU</span>
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">
            <span className="idx">06</span> — EDUCATION
          </p>
          <h2 className="section-title">Academic background</h2>
          <p className="section-sub">
           
          </p>
        </div>

        <div className="edu__list assemble" data-reveal>
          {education.map((e, i) => (
            <div className="asm" style={{ '--i': i % 3 }} key={i}>
            <div className="edu__card">
              <span className="mono edu__period">{e.period}</span>
              <h3 className="edu__degree">{e.degree}</h3>
              <p className="edu__institution">{e.institution}</p>
              <p className="edu__detail">{e.detail}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

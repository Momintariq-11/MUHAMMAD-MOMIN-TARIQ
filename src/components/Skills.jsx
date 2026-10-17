import { skills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <span className="index-mark mono">SKL</span>
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">
            <span className="idx">03</span> — CAPABILITIES
          </p>
          <h2 className="section-title">What I build with</h2>
          <p className="section-sub">
            Core disciplines, with applied AI work running underneath most of it.
          </p>
        </div>

        <div className="skills__grid assemble" data-reveal>
          {skills.map((group, i) => (
            <div className="asm" style={{ '--i': i % 3 }} key={group.id}>
            <div className="skill-card">
              <div className="skill-card__head">
                <span className="mono skill-card__id">{group.id}</span>
                <h3 className="skill-card__title">{group.category}</h3>
              </div>
              <ul className="skill-card__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="skill-card__bullet" aria-hidden="true" />
                    {item}
                  </li>
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

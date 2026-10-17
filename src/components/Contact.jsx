import { profile, socials, founder } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <div className="contact__inner" data-reveal>
          <p className="eyebrow">
            <span className="idx">07</span> — CONTACT INFO
          </p>
          <h2 className="contact__title">
            Let's build <span className="text-red">something</span>.
          </h2>
          <p className="contact__sub">
            Open to Java desktop, full-stack and AI/ML opportunities, and to software projects through SOLVIQX. Reach out through any of the channels below.
          </p>

          <div className="contact__socials assemble" data-reveal>
            {socials.map((s, i) => (
              <div className="asm" style={{ '--i': i }} key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="social-card"
              >
                <span className="social-card__label mono">{s.label.toUpperCase()}</span>
                <span className="social-card__handle">{s.handle}</span>
                <svg className="social-card__arrow" width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="wrap footer__inner">
          <div className="footer__made">
            <a className="footer__logo" href={founder.href} target="_blank" rel="noopener noreferrer" aria-label="SOLVIQX, solviqx.com">
              <img src={founder.wordmark} alt="SOLVIQX" height="20" />
            </a>
            <span className="footer__sep" aria-hidden="true">·</span>
            <a className="mono footer__site" href={founder.href} target="_blank" rel="noopener noreferrer">solviqx.com</a>
          </div>
          <div className="footer__right">
            <span className="mono footer__brand">{profile.name.toUpperCase()}</span>
            <span className="footer__sep" aria-hidden="true">·</span>
            <span className="mono footer__meta">FOUNDER &amp; CEO OF SOLVIQX</span>
          </div>
        </div>
      </footer>
    </section>
  )
}

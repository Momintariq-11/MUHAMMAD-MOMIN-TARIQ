import { profile, socials } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <div className="contact__inner">
          <p className="eyebrow">
            <span className="idx">06</span> —  CONTACT INFO
          </p>
          <h2 className="contact__title">
            Let's build <span className="text-red">something</span>.
          </h2>
          <p className="contact__sub">
            Open to iOS, Java desktop, and full-stack opportunities. Reach out through any of the channels below.
          </p>

          <div className="contact__socials">
            {socials.map((s) => (
              <a
                key={s.label}
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
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="wrap footer__inner">
          <span className="mono footer__brand">{profile.name.toUpperCase()}</span>
          <span className="mono footer__meta">© {new Date().getFullYear()} · BUILT FOR VERCEL</span>
        </div>
      </footer>
    </section>
  )
}

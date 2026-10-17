import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Founder from './components/Founder.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import { useEffect } from 'react'
import './App.css'

export default function App() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('js')

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('is-in', e.isIntersecting)),
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    )
    document
      .querySelectorAll('[data-reveal]:not(.assemble), .asm, .hero__copy, .hero__photo-wrap')
      .forEach((el) => io.observe(el))

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        root.style.setProperty('--scroll', max > 0 ? Math.min(1, window.scrollY / max) : 0)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

function Hero() {
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current

    gsap.to(el, {
      xPercent: -50, // 🔥 movimento horizontal
      duration: 65,  // 🔥 mais lento = mais premium
      ease: "none",  // 🔥 essencial pro loop perfeito
      repeat: -1
    })
  }, [])

  return (
    <section className="hero">
      <h1 className="hero__title">
        <div className="hero__track" ref={trackRef}>
          <span>Lucas Gonçalves</span>
          <span>Lucas Gonçalves</span>
          <span>Lucas Gonçalves</span>
          <span>Lucas Gonçalves</span>
        </div>
      </h1>

      <div className="hero__footer">
         <span>São Roque - SP, Brasil</span>
         <span className="hero__footer__dev">Junior Developer</span>
      </div>
    </section>
  )
}

export default Hero
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

function Hero() {
  const titleRef = useRef(null)

useEffect(() => {
  if (!titleRef.current) return

  const letters = titleRef.current.querySelectorAll('span')

  gsap.fromTo(
    letters,
    { y: 120, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.05 }
  )
}, [])

  const text = "Lucas Gonçalves"

  return (
    <section className="hero">
      <h1 className="hero__title" ref={titleRef}>
        {text.split("").map((letter, index) => (
          <span key={index}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
    </section>
  )
}

export default Hero

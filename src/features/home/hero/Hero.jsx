import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.css';

export default function Hero() {
  const trackRef = useRef(null);
  const names = Array(4).fill('Lucas Gonçalves');

  useEffect(() => {
    const el = trackRef.current;

    const animation = gsap.to(el, {
      xPercent: -50,
      duration: 65,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      animation.kill(); // 🔥 limpa animação
    };
  }, []);

  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
        <span className={styles.heroTrack} ref={trackRef}>
          {names.map((name, i) => (
            <span key={i}>{name}</span>
          ))}
        </span>
      </h1>

      <div className={styles.heroFooter}>
        <span>São Roque - SP, Brasil</span>
        <span className={styles.heroFooterDev}>FrontEnd Developer</span>
      </div>
    </section>
  );
}
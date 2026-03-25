import { useState, useEffect } from 'react';
import styles from './ProjectsNav.module.css';
import Tag from '../../../../components/tag/Tag.jsx';

export default function ProjectsNav({ projects }) {
  const [active, setActive] = useState(null);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClicking) return;

      const middle = window.innerHeight / 2;

      projects.forEach((project) => {
        const section = document.getElementById(project.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top < middle && rect.bottom > middle) {
          setActive(project.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects, isClicking]);

  return (
    <nav className={styles.nav}>
      <Tag text="principais trabalhos" />

      {projects?.map((project) => (
        <a
          key={project.id}
          href={`#${project.id}`}
          className={active === project.id ? styles.active : ''}
          onClick={() => {
            setActive(project.id);
            setIsClicking(true);

            setTimeout(() => {
              setIsClicking(false);
            }, 800);
          }}
        >
          {project.id}
        </a>
      ))}
    </nav>
  );
}
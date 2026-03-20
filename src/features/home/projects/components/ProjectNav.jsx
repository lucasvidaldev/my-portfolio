import { useState, useEffect } from 'react';
import styles from './ProjectNav.module.css';
import Tag from '../../../../components/tag/Tag.jsx';

export default function ProjectNav({ projects }) {
  const [active, setActive] = useState(projects?.[0]?.id);

  useEffect(() => {
    const handleScroll = () => {
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
  }, [projects]);

  return (
    <nav className={styles.nav}>
      <Tag text="principais trabalhos" />
      {projects.map((project) => (
        <a
          key={project.id}
          href={`#${project.id}`}
          onClick={() => setActive(project.id)} // 👈 IMPORTANTE
          className={active === project.id ? styles.active : ''}
        >
          {project.id}
        </a>
      ))}
    </nav>
  );
}

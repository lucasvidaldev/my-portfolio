import styles from './ProjectsCard.module.css';

export default function ProjectsCard({ projects }) {
  return (
    <div className={styles.projectIntro}>
      {projects.map((card) => (
        <section id={card.id} key={card.id} className={styles.project}>
          {/* LEFT - IMAGEM */}
          <div className={styles.projectImage}>
            <img src={card.img} alt={`Projeto ${card.title}`} />
          </div>

          {/* RIGHT - CONTEÚDO */}
          <div className={styles.projectInfo}>
            {/* EYEBROW */}
            <span className={styles.eyebrow}>{card.eyebrow}</span>

            {/* TITLE */}
            <h2 className={styles.cardTitle}>{card.title}</h2>

            {/* BULLETS */}
            <ul className={styles.bullets}>
              {card.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* TECHS */}
            <div className={styles.techs}>
              {card.techs.map((tech, i) => (
                <span key={i} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className={styles.projectButtons}>
              <a href={card.deploy} target="_blank" rel="noreferrer">
                Ver projeto
              </a>
              <a href={card.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

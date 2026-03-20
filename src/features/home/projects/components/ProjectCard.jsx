import styles from './ProjectCard.module.css';
import Project from './ProjectNav.jsx';

/* Imports abaixo são das logos dos projetos */

/* Imports abaixo são os Teaser de cada Card dos projetos */
import Img1 from '../../../../assets/images/projects/img1.png';

export default function ProjectCard() {
  const CardProjects = [
    {
      id: 'veepee',
      img: Img1,
      eyebrow: 'France - Global - 2024-2026',
      title: 'Veepee - Sistema de Design',
      bullets: [
        'Reestruturei layout com foco em UX/UI',
        'Melhorei navegação e consistência visual',
        'Interface moderna baseada no Bikecraft',
      ],
      techs: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Figma',
        'UX/UI',
        'Responsivo',
      ],
      deploy: 'https://mybikestar.netlify.app/',
      github: 'https://github.com/eulucasvidal/bikestar',
    },
    {
      id: 'kira',
      img: Img1,
      eyebrow: 'France - Global - 2024-2026',
      title: 'Veepee - Sistema de Design',
      bullets: [
        'Reestruturei layout com foco em UX/UI',
        'Melhorei navegação e consistência visual',
        'Interface moderna baseada no Bikecraft',
      ],
      techs: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Figma',
        'UX/UI',
        'Responsivo',
      ],
      deploy: 'https://mybikestar.netlify.app/',
      github: 'https://github.com/eulucasvidal/bikestar',
    },
        {
      id: 'tucuvi',
      img: Img1,
      eyebrow: 'France - Global - 2024-2026',
      title: 'Veepee - Sistema de Design',
      bullets: [
        'Reestruturei layout com foco em UX/UI',
        'Melhorei navegação e consistência visual',
        'Interface moderna baseada no Bikecraft',
      ],
      techs: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Figma',
        'UX/UI',
        'Responsivo',
      ],
      deploy: 'https://mybikestar.netlify.app/',
      github: 'https://github.com/eulucasvidal/bikestar',
    },
    {
      id: 'hp',
      img: Img1,
      eyebrow: 'France - Global - 2024-2026',
      title: 'Veepee - Sistema de Design',
      bullets: [
        'Reestruturei layout com foco em UX/UI',
        'Melhorei navegação e consistência visual',
        'Interface moderna baseada no Bikecraft',
      ],
      techs: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Figma',
        'UX/UI',
        'Responsivo',
      ],
      deploy: 'https://mybikestar.netlify.app/',
      github: 'https://github.com/eulucasvidal/bikestar',
    },
  ];

  return (
    <div className={styles.projectContainer}>
      {CardProjects.map((card) => (
        <section id={card.id} key={card.id} className={styles.project}>

          {/* LEFT - IMAGEM */}
          <div className={styles.projectImage}>
            <img src={card.img} alt="imagem do projeto" />
          </div>

          {/* RIGHT - CONTEÚDO */}
          <div className={styles.projectInfo}>

            {/* EYEBROW */}
            <span className={styles.eyebrow}>{card.eyebrow}</span>

            {/* TITLE */}
            <h1 className={styles.cardTitle}>{card.title}</h1>

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
              <a href={card.deploy} target="_blank">Ver projeto</a>
              <a href={card.github} target="_blank">GitHub</a>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}
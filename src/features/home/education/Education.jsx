import styles from './Education.module.css';
import { education } from './data/educationData.js';

import Title from '../../../components/title/Title.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Tag from '../../../components/tag/Tag.jsx';

export default function Education() {
  return (
    <section className={styles.educationSectionBg}>
      <div className="container">
        <div className={styles.educationSection}>
          <Tag text="formação acadêmica" />
          <Title line="Minha jornada educacional" highlight="educacional" />
          <Paragraph text="Minha jornada educacional é marcada por uma busca constante por conhecimento e aprimoramento. Desde os primeiros passos na educação formal até as experiências mais recentes, cada etapa contribuiu para moldar minha visão e habilidades." />

          <div className={styles.educationGrid}>
            {education.map((item) => (
              <div
                key={item.id}
                className={`${styles.educationCard} ${styles[item.variant]} reveal`}
              >
                {/* 👇 ÍCONE */}
                <img
                  src={item.icon}
                  alt={item.name}
                  className={styles.educationCardIcon}
                />

                {/* 👇 CONTEÚDO */}
                <div className={styles.educationCardContent}>
                  <h2>{item.name}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
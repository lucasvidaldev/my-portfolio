import styles from './About.module.css';
import { aboutTags } from './data/aboutData.js';

import Title from '../../../components/title/Title.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Tag from '../../../components/tag/Tag.jsx';

import SuaImagem from '../../../assets/images/background/foto-about.jpg';

function InfoItem({ label, text }) {
  return (
    <div className={styles.aboutInfoItem}>
      <dt className={styles.label}>{label}</dt>
      <dd className={styles.text}>{text}</dd>
    </div>
  );
}

export default function About() {
  return (
    <section className={`${styles.aboutSectionBg} reveal delay-2`} id='sobre'>
      <div className="container">
        <div className={styles.aboutSection}>
          <Tag text="Um pouco sobre mim" />
          <Title line="Além do portfólio" highlight="portfólio" />
          {/* CONTENT */}
          <div className={styles.aboutContent}>
            {/* LEFT */}
            <div className={`${styles.aboutSectionDescription} reveal`}>
              <img
                src={SuaImagem}
                alt="Foto pessoal"
                className={styles.aboutSectionMedia}
              />

              <Paragraph text="Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Com uma base sólida em HTML, CSS e JavaScript, estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para entregar projetos de alta qualidade." />
              <Paragraph text="Minha jornada na programação começou há alguns anos, e desde então, tenho me dedicado a explorar o mundo do desenvolvimento web. Adoro enfrentar desafios técnicos e encontrar soluções criativas para problemas complexos." />
            </div>

            {/* RIGHT */}
            <div className={`${styles.aboutSectionInfo} reveal delay-1`}>
              {/* INFOS */}
              <dl className={styles.aboutInfoList}>
                <InfoItem label="morando em" text="São Roque, SP — Brasil" />
                <InfoItem
                  label="idiomas"
                  text="Português (nativo) e Inglês em evolução"
                />
                <InfoItem
                  label="estudos"
                  text="ADS (Infnet) + Front-end (Origamid)"
                />
                <InfoItem
                  label="hobbies"
                  text="Artes Marciais, Pesca Espotiva, Viagens ,Tecnologia e Games"
                />
              </dl>

              {/* TAGS */}
              <div className={styles.aboutTagsBlock}>
                <span className={styles.aboutTagsTitle}>
                  COMO MEUS COLEGAS ME DESCREVEM
                </span>

                <ul className={styles.aboutTags}>
                  {aboutTags.map((tag) => (
                    <li key={tag.id} className={styles.aboutTagsList}>
                      {tag.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

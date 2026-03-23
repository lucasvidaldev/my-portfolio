import styles from './About.module.css';
import Title from '../../../components/title/Title.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Tag from '../../../components/tag/Tag.jsx';
import SuaImagem from '../../../assets/images/background/foto-about.png';

function InfoItem({ label, text }) {
  return (
    <div className={styles.infoItem}>
      <dt className={styles.label}>{label}</dt>
      <dd className={styles.text}>{text}</dd>
    </div>
  );
}
const tags = [
  { id: 1, name: 'Disciplinado' },
  { id: 2, name: 'Curioso' },
  { id: 3, name: 'Consistente' },
  { id: 4, name: 'Proativo' },
  { id: 5, name: 'Focado' },
  { id: 6, name: 'Analítico' },
];
export default function About() {
  return (
    <section className={styles.aboutBg}>
      <div className="container">
        <div className={styles.about}>
          <Tag text="Um pouco sobre mim" />
          <Title line="Além do portfólio" highlight="portfólio" />
          {/* CONTENT */}
          <div className={styles.content}>
            {/* LEFT */}
            <div className={styles.aboutDescription}>
              <img
                src={SuaImagem}
                alt="Foto pessoal"
                className={styles.aboutMedia}
              />

              <Paragraph text="Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Com uma base sólida em HTML, CSS e JavaScript, estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para entregar projetos de alta qualidade." />
              <Paragraph text="Minha jornada na programação começou há alguns anos, e desde então, tenho me dedicado a explorar o mundo do desenvolvimento web. Adoro enfrentar desafios técnicos e encontrar soluções criativas para problemas complexos." />
            </div>

            {/* RIGHT */}
            <div className={styles.aboutInfo}>
              {/* INFOS */}
              <dl className={styles.infoList}>
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
              <div className={styles.tagsBlock}>
                <span className={styles.tagsTitle}>
                  COMO MEUS COLEGAS ME DESCREVEM
                </span>

                <ul className={styles.tags}>
                  {tags.map((tag) => (
                    <li key={tag.id} className={styles.tagsList}>
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

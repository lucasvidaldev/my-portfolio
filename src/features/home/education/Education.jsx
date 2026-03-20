import styles from './Education.module.css';
import InfnetLogo from '../../../assets/icons/infnet.svg';
import OrigamidLogo from '../../../assets/icons/origamid.svg';
import HoracioLogo from '../../../assets/icons/hml.svg';

import Title from '../../../components/title/Title.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';

export default function Education() {
  const items = [
    {
      name: 'Universidade Infnet',
      text: 'Atualmente, estou cursando Análise e Desenvolvimento de Sistemas no Infnet, onde iniciei minha formação acadêmica na área de tecnologia. A graduação tem ampliado minha base teórica e prática, permitindo uma compreensão mais estruturada do desenvolvimento de software e preparando-me para evoluir como desenvolvedor fullstack.',
      icon: InfnetLogo,
      variant: 'primary',
    },
    {
      name: 'Escola Origamid',
      text: 'Minha base em desenvolvimento front-end foi construída através dos cursos da Origamid, onde aprendi na prática HTML, CSS e JavaScript, além de conceitos fundamentais de UI e UX. Durante esse processo, desenvolvi projetos completos, focando em boas práticas, organização de código e criação de interfaces modernas e responsivas.',
      icon: OrigamidLogo,
      variant: 'light',
    },
    {
      name: 'Horácio Manley Lane',
      text: 'Concluí meu ensino médio na Escola Estadual Horácio Manley Lane, onde desenvolvi habilidades importantes como disciplina, organização e comprometimento. Embora não tenha tido contato com programação nesse período, essa base foi fundamental para minha adaptação e evolução na área de tecnologia posteriormente.',
      icon: HoracioLogo,
      variant: 'dark',
    },
  ];

  return (
    <section className={styles.sectionBg}>
      <div className="container">
        <div className={styles.section}>
          <Title line="Minha jornada educacional" highlight="educacional" />
          <Paragraph text="Minha jornada educacional é marcada por uma busca constante por conhecimento e aprimoramento. Desde os primeiros passos na educação formal até as experiências mais recentes, cada etapa contribuiu para moldar minha visão e habilidades." />
          <div className={styles.grid}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} ${styles[item.variant]}`}
              >
                {/* 👇 ÍCONE */}
                <img src={item.icon} alt="" className={styles.cardIcon} />

                {/* 👇 CONTEÚDO */}
                <div className={styles.cardContent}>
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

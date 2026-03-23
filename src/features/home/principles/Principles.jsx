import styles from './Principles.module.css';
import Title from '../../../components/title/Title.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Tag from '../../../components/tag/Tag.jsx';

export default function Principles() {
  const principles = [
    {
      id: '01',
      title: 'Menos é mais',
      text: 'Elimine o desnecessário até que reste apenas o essencial. Cada elemento conquista seu lugar por sua função, não por decoração.',
    },
    {
      id: '02',
      title: 'Priorize os usuários',
      text: 'Pessoas reais com problemas reais: é aí que começa toda decisão. Empatia não é uma fase, é o alicerce.',
    },
    {
      id: '03',
      title: 'Trabalhe de forma mais inteligente, não mais árdua.',
      text: 'Sistemas escaláveis, padrões reutilizáveis e automação onde é necessário. Eficiência não é preguiça.',
    },
    {
      id: '04',
      title: 'Boa comunicação',
      text: 'O melhor trabalho não significa nada se você não consegue explicar o porquê. Clareza na conversa é tão importante quanto na tela.',
    },
  ];

  return (
    <section className={styles.principlesBg}>
      {/* HEADER */}
      <div className="container">
        <div className={styles.principles}>
          <Tag text="princípios" />
          <Title line="Aquilo que defendo" highlight="defendo" />
          <Paragraph text="Os princípios aos quais sempre retorno, aqueles que moldam a forma como penso, projeto e colaboro." />
          {/* GRID */}
          <div className={styles.grid}>
            {principles.map((item) => (
              <div key={item.id} className={styles.card}>
                <span className={styles.number}>{item.id}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className={styles.line}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

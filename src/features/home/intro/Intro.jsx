import Title from '../../../components/title/Title';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import style from './Intro.module.css';
import Tag from '../../../components/tag/Tag.jsx';

export default function Intro() {
  return (
    <section className={style.introBg}>
      <div className=' container'>
        <div className={style.introContainer}>
          <Tag text="bem vindo" />
          <Title
            line="Eu construo soluções que fazem sentido, mesmo quando o problema não está totalmente definido."
            highlight="soluções"
          />
          <div className={style.introText}>
            <Paragraph text="Gosto de transformar complexidade em sistemas claros e funcionais, que ajudam tanto usuários quanto equipes a entender o que realmente importa." />
            <Paragraph text="Meu foco é criar processos e ferramentas que funcionem na prática, entregando valor de forma consistente e confiável, sem complicações desnecessárias." />
          </div>
        </div>
      </div>
    </section>
  );
}
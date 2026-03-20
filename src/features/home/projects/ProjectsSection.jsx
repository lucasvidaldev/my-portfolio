import Title from '../../../components/title/Title';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Tag from '../../../components/tag/Tag.jsx';
import style from './Projects.module.css';

export default function Projects() {
  return (
    <section className={`${style.projectBg}`}>
      <div className=" container">
        <div className={`${style.projectContainer}`}>
          <Tag text="o que eu faço" />
          <Title
            line="Eis o que eu realmente faço o dia todo"
            highlight="o que eu realmente"
          />
            <Paragraph text="Basicamente, é a minha desculpa para falar sobre sistemas, pixels e IA, enquanto finjo que é tudo um trabalho profissional muito sério." />
        </div>
      </div>
    </section>
  );
}

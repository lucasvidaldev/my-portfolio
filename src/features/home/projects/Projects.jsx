import Title from '../../../components/title/Title.jsx';
import Subtitle from '../../../components/subtitle/Subtitle.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Tag from '../../../components/tag/Tag.jsx';

import style from './Projects.module.css';

import ProjectsCards from './components/ProjectsCard.jsx';
import ProjectNav from './components/ProjectsNav.jsx';
import { projects } from './components/data/projectsData.js';

export default function Projects() {
  return (
    <section className={style.projectBg} id='projetos'>
      <div className="container">
        <div className={style.projectSection}>
          <div className={style.projectIntro}>
            <Tag text="melhores trabalhos" />
            <Title
              line="Eis o que eu realmente faço o dia todo"
              highlight="o que eu realmente"
            />
            <Paragraph text="Hoje, atuo principalmente no front-end, criando interfaces modernas e experiências digitais com foco em performance e design." />
            <Paragraph text="Enquanto isso, sigo evoluindo para o fullstack, buscando entender e desenvolver também toda a lógica por trás das aplicações." />
            <Paragraph text="Atualmente, curso Análise e Desenvolvimento de Sistemas (ADS) pelo Infnet, reforçando minha base técnica e ampliando minha visão como desenvolvedor." />
          </div>
          <div className={style.projectIntro}>
            <Subtitle line="Projetos em Evidência" highlight="em" />
            <Paragraph text="Aqui estão alguns dos projetos que desenvolvi, aplicando na prática meus conhecimentos em front-end, criando interfaces modernas, funcionais e focadas na experiência do usuário." />
          </div>
          <ProjectNav projects={projects} />
          <ProjectsCards projects={projects} />
        </div>
      </div>
    </section>
  );
}

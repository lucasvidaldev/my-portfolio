import { About, Contact, Education, Header, Hero, Intro, Principles, Projects } from './features/home';

import'../src/styles/global.css';
import { useReveal } from './hooks/useReveal';
import { useMedia } from './hooks/useMedia';

function App() {
  useReveal();
  useMedia();

  return <>
    <Header />
    <Hero />
    <About />
    <Intro />
    <Projects />
    <Education />
    <Principles />
    <Contact />
  </>;
}

export default App;
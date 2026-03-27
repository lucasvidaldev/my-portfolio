import { About, Contact, Education, Header, Hero, Intro, Principles, Projects } from './features/home';
import'../src/styles/global.css';

function App() {
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
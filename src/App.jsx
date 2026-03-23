import { About, Contact, Education, Header, Hero, Intro, Principles, Projects } from './features/home';
import'../src/styles/global.css';

function App() {
  return <>
    <Header />
    <Hero />
    <Intro />
    <Projects />
    <Education />
    <About />
    <Principles />
    <Contact />
  </>;
}

export default App;
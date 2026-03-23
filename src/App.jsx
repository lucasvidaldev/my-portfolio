import { About, Education, Header, Hero, Intro, Principles, Projects } from './features/home';
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
  </>;
}

export default App;
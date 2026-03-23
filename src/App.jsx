import { About, Education, Header, Hero, Intro, Projects } from './features/home';
import'../src/styles/global.css';

function App() {
  return <>
    <Header />
    <Hero />
    <Intro />
    <Projects />
    <Education />
    <About />
  </>;
}

export default App;
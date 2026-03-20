import { Education, Header, Hero, Intro, Projects } from './features/home';
import'../src/styles/global.css';

function App() {
  return <>
    <Header />
    <Hero />
    <Intro />
    <Projects />
    <Education />
  </>;
}

export default App;
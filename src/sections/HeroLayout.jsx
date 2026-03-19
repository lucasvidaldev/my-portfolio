import { Header, Hero } from '../components';

function HeroLayout({ children }) {
  return (
    <>
      <Header />
      <Hero />
      {children}
    </>
  );
}

export default HeroLayout;
import styles from './Header.module.css';
import NavMenu from './components/NavMenu.jsx';
import MobileMenu from './components/MobileMenu.jsx';

export default function Header() {
  return (
    <header className={`${styles.header} reveal`}>
      <span className={styles.headerLogo}>lucas gonçalves</span>
      <nav>
        <NavMenu />
        <MobileMenu />
      </nav>
    </header>
  );
}
import styles from './Header.module.css';
import NavMenu from './components/NavMenu.jsx';
import MobileMenu from './components/MobileMenu.jsx';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerLogo}>lucas gonçalves</h1>
      <nav>
        <NavMenu />
        <MobileMenu />
      </nav>
    </header>
  );
}

export default Header;

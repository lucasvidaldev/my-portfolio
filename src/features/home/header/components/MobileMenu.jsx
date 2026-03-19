import { useState } from 'react';
import NavMenu from './NavMenu';
import styles from './MobileMenu.module.css';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button
        className={`${styles.navToggle} ${isOpen ? styles.navToggleActive : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.navOverlay} ${isOpen ? styles.navOverlayActive : ''}`}>
        <NavMenu isMobile onClickLink={() => setIsOpen(false)} />

        <div className={styles.navFooter}>
          <span>Junior Developer</span>
        </div>
      </div>
    </nav>
  );
}

export default MobileMenu;

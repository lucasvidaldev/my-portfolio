import styles from './NavMenu.module.css';

export default function NavMenu({ isMobile = false, onClickLink }) {
  const links = [
  { label: "serviços", href: "#servicos" },
  { label: "trabalhos", href: "#trabalhos" },
  { label: "estudos", href: "#estudos" },
  { label: "sobre mim", href: "#sobre" },
  { label: "contato", href: "#contato" }
];

  return (
    <ul className={`${styles.navMenu} ${isMobile ? styles.mobile : ''}`}>
      {links.map((item) => (
        <li key={item.label} className={styles.navItem}>
          <a
            href={item.href}
            className={styles.navLink}
            onClick={isMobile ? () => onClickLink?.() : undefined}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
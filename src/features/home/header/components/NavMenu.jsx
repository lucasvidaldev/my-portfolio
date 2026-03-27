import styles from './NavMenu.module.css';

export default function NavMenu({ isMobile = false, onClickLink }) {
  const links = [
  { label: "home", href: "#home" },
  { label: "sobre mim", href: "#sobre" },
  { label: "projetos", href: "#projetos" },
  { label: "contato", href: "#contato" }
];

  return (
    <ul className={`${styles.navMenu} ${isMobile ? styles.mobile : ''}`}>
      {links.map((item) => (
        <li key={item.label}>
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
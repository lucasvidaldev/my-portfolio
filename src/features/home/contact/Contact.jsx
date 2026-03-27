import styles from './Contact.module.css';
import Tag from '../../../components/tag/Tag.jsx';

export default function Contact() {
  return (
    <footer className={styles.contactBG} id='contato'>
      <div className="container">
        <div className={`${styles.contactSection} reveal`}>
          {/* HEADER */}
          <div className={styles.contactHeader}>
            <Tag text="contato" />
            <h1 className={styles.contactTitle}>
              Vamos nos <br /> conectar
            </h1>
          </div>
          {/* BOTTOM */}
          <div className={styles.contactBottom}>
            <nav className={styles.contactLeft}>
              <a href="#">cookies</a>
              <a href="#">privacidade</a>
              <a href="#">jurídico</a>
            </nav>
            <nav className={styles.contactRight}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </a>
              <a href="mailto:email@gmail.com">email@gmail.com</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

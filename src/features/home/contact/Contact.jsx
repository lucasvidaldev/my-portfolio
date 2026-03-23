import styles from './Contact.module.css';
import Tag from '../../../components/Tag/Tag.jsx';

export default function Contact() {
  return (
    <footer className={styles.contactBG}>
      <div className='container'>
        <div className={styles.contact}>
          {/* HEADER */}
          <div className={styles.header}>
            <Tag text="CONTATO" />
            <h1 className={styles.title}>
              Vamos nos <br /> conectar
            </h1>
          </div>
          {/* BOTTOM */}
          <div className={styles.bottom}>
            <div className={styles.left}>
              <a href="#">COOKIES</a>
              <a href="#">PRIVACIDADE</a>
              <a href="#">JURÍDICO</a>
            </div>
            <div className={styles.right}>
              <a href="https://linkedin.com" target="_blank">
                LINKEDIN
              </a>
              <a href="mailto:seuemail@gmail.com">EMAIL2026@GMAIL.COM</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

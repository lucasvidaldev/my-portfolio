import styles from './Title.module.css';

export default function Title({ line, highlight }) {
  return (
    <h2 className={styles.sectionTitle}>
      <span className={styles.line}>
        {line.split(highlight)[0]}
        <span className={styles.sectionTitleSpan}>{highlight}</span>
        {line.split(highlight)[1]}
      </span>
    </h2>
  );
}

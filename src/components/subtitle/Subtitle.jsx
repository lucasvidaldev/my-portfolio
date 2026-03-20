import styles from './Subtitle.module.css';

export default function Subtitle ({ line,highlight }){
  return (
    <h2 className={styles.subTitle}>
      <span className={styles.line}>
        {line.split(highlight)[0]}
        <span className={styles.subTitleSpan}>{highlight}</span>
        {line.split(highlight)[1]}
      </span>
    </h2>
  )
}
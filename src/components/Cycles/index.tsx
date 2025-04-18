import styles from './styles.module.css';

type Props = {};

export function Cycles(props: Props) {
  return (
    <div className={styles.cycles}>
      <span>Cycles:</span>
      <div className={styles.cyclesDots}>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBrackTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBrackTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBrackTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.longBrackTime}`}></span>
      </div>
    </div>
  );
}

import styles from './styles.module.css';

type Props = {};

export function Footer(props: Props) {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a técnica pomodoro</a>
      <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💜</a>
    </footer>
  );
}

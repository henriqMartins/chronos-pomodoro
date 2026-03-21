import styles from './styles.module.css';

export function Footer() {
  return <footer className={styles.footer}>
    <a href=''>Entenda como funciona a tecnica</a>
    <a href=''>Chronoso Pomodoro &copy; {new Date().getFullYear()}</a>
  </footer>
}

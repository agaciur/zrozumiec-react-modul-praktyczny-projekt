import styles from "./FullWidthButton.module.css"
export function FullWidthButton({ children, isBlack }) {
  return <button className={`${styles.fullWidthButton} ${isBlack ? styles.isBlack : ""}`}>{children}</button>
}

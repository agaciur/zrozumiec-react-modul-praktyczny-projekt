import styles from "./FullWidthButton.module.css"
export function FullWidthButton({ children, isBlack, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.fullWidthButton} ${isBlack ? styles.isBlack : ""}`}>
      {children}
    </button>
  )
}

import styles from "./CartSummary.module.css"
import CAR_IMAGE from "../../assets/car.svg"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
export function CartSummary({ cartProducts }) {
  const deliveryCost = 49
  const minSumForFreeDelivery = 500
  let sum = 0
  cartProducts.forEach(product => (sum += product.pricePLN))
  const totalCost = sum >= minSumForFreeDelivery ? sum : sum + deliveryCost
  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów</p>
        <p>{sum}</p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy:</p>
        <p>{sum >= minSumForFreeDelivery ? 0 : deliveryCost}</p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty</p>
        <p>{totalCost}zł</p>
      </div>
      <FullWidthButton isBlack={true}>do kasy</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_IMAGE} />
        <p>Darmowa dostawa od {minSumForFreeDelivery}zł</p>
      </div>
    </div>
  )
}

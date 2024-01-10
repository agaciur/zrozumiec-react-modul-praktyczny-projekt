import styles from "./CartSummary.module.css"
import CAR_IMAGE from "../../assets/car.svg"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
import { useContext } from "react"
import { CurrencyContext } from "../../contexts/CurrencyContext"
import { CURRENCIES, CURRNECY_SIGN } from "../../constants/currencies"
export function CartSummary({ cartProducts }) {
  const [currency] = useContext(CurrencyContext)
  const deliveryCosts = {
    [CURRENCIES.USD]: 10,
    [CURRENCIES.PLN]: 49,
  }
  const minSumsForFreeDelivery = {
    [CURRENCIES.USD]: 100,
    [CURRENCIES.PLN]: 500,
  }

  const currencySign = CURRNECY_SIGN[currency]

  const deliveryCost = deliveryCosts[currency]
  const minSumForFreeDelivery = minSumsForFreeDelivery[currency]

  let sum = 0

  cartProducts.forEach(product => {
    sum += currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD
  })

  const totalCost = sum >= minSumForFreeDelivery ? sum : sum + deliveryCost
  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów</p>
        <p>
          {sum}
          {currencySign}
        </p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy:</p>
        <p>
          {sum >= minSumForFreeDelivery ? 0 : deliveryCost}
          {currencySign}
        </p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty</p>
        <p>
          {totalCost} {currencySign}
        </p>
      </div>
      <FullWidthButton isBlack={true}>do kasy</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_IMAGE} />
        <p>
          Darmowa dostawa od {minSumForFreeDelivery}
          {currencySign}
        </p>
      </div>
    </div>
  )
}

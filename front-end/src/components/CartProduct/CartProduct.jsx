import styles from "./CartProduct.module.css"
import REMOVE_ICON from "../../assets/delete.svg"
import { Price } from "../Price/Price"
export function CartProduct({ product }) {
  const price = <Price product={product} />
  return (
    <div className={styles.favProduct}>
      <img src={product.photos[0]} />
      <div className={styles.productInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.productName} {product.brand}
          </h3>
          <h3>{price}</h3>
        </div>

        <p className={styles.priceRow}>
          <span>Cena:</span>
          {price}
        </p>

        <div className={styles.buttonRow}>
          <button>
            <img src={REMOVE_ICON} />
            Usuń
          </button>
        </div>
      </div>
    </div>
  )
}

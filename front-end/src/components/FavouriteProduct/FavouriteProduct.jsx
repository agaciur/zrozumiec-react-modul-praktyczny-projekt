import styles from "./FavouriteProduct.module.css"
import REMOVE_ICON from "../../assets/delete.svg"
import BAG_ICON from "../../assets/bag.svg"
export function FavouriteProduct({ product }) {
  return (
    <div className={styles.favProduct}>
      <img src={product.photos[0]} />
      <div className={styles.productInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.productName} {product.brand}
          </h3>
          <h3>{product.pricePLN}zł</h3>
        </div>

        <p className={styles.priceRow}>
          <span>Cena:</span>
          {product.pricePLN}zł
        </p>

        <div className={styles.buttonRow}>
          <button>
            <img src={REMOVE_ICON} />
            Usuń
          </button>
          <button>
            <img src={BAG_ICON} />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  )
}

import styles from "./CartProductList.module.css"
import { CenteredContent } from "../CenteredContent/CenteredContent"
import { CartProduct } from "../CartProduct/CartProduct"
export function CartProductList({ cartProducts }) {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Koszyk</h2>
        <div>
          {cartProducts.map(product => {
            return (
              <CartProduct
                key={product.id}
                product={product}
              />
            )
          })}
        </div>
      </div>
    </CenteredContent>
  )
}

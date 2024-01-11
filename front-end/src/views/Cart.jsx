import { useContext } from "react"
import { CartProductList } from "../components/CartProductList.jsx/CartProductList"
import { CartSummary } from "../components/CartSummary/CartSummary"
import { FlexContainer } from "../components/FlexContainer/FlexContainer"
import { CartContext } from "../contexts/CartContext"
export function Cart() {
  const [cartItems] = useContext(CartContext)
  return (
    <FlexContainer>
      <CartProductList cartProducts={cartItems} />
      <CartSummary cartProducts={cartItems} />
    </FlexContainer>
  )
}

import { useContext } from "react"
import { CurrencyContext } from "../../contexts/CurrencyContext"
import { CURRENCIES, CURRNECY_SIGN } from "../../constants/currencies"
export function Price({ product }) {
  const [currency] = useContext(CurrencyContext)
  return (
    <>
      {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
      {CURRNECY_SIGN[currency]}
    </>
  )
}

import { Hero } from "../components/Hero/Hero"
import COVER_PHOTO from "../assets/cover.jpeg"
import { Products } from "../components/Products/Products"
import { useLoaderData } from "react-router-dom"
export function MainPage() {
  const { bestsellers, heroImageUrl } = useLoaderData()

  return (
    <>
      <Hero heroImage={heroImageUrl} />
      <Products
        products={bestsellers}
        headerText='Sprawdź nasze bestellery'
      />
    </>
  )
}

import "./styles/theme.css"
import "./styles/globals.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Favourites } from "./views/Favourites.jsx"
import { Cart } from "./views/Cart.jsx"
import { ProductDetails } from "./views/ProductDetails.jsx"
import { ProductsList } from "./views/ProductsList.jsx"
import { Layout } from "./components/Layout/Layout.jsx"
import { MainPage } from "./views/MainPage.jsx"
import { mainPageLoader } from "./api/mainPageLoader.js"
import { productListLoader } from "./api/productListLoader.js"
import { productLoader } from "./api/productLoader.js"
import { addProductToFavourites } from "./api/addProductToFavourites.js"
import { favouritesLoader } from "./api/favouritesLoader.js"
import { deleteFavouriteAction } from "./api/deleteFavouriteAction.js"

const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductToFavourites,
  },
  {
    path: "/delete-from-favourites/:fovouriteId",
    action: deleteFavouriteAction,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
        loader: favouritesLoader,
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subcategory?",
        element: <ProductsList />,
        loader: productListLoader,
      },
      {
        path: "/:gender/:category/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

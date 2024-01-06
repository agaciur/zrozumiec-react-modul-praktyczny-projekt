import "./styles/theme.css"
import "./styles/globals.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Favourites } from "./views/Favourites.jsx"
import { Cart } from "./views/Cart.jsx"
import { ProductDetails } from "./views/ProductDetails.jsx"
import { Layout } from "./components/Layout/Layout.jsx"
import { MainPage } from "./views/MainPage.jsx"
import { mainPageLoader } from "./api/mainPageLoader.js"

const router = createBrowserRouter([
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
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

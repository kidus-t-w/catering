import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.page.tsx"
import Products from "./pages/Products.page.tsx"
import AboutUs from "./pages/AboutUs.page.tsx"
import ContactUs from "./pages/ConcactUs.page.tsx"
import Gallery from "./pages/Gallery.page.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "about_us",
        element: <AboutUs/>
      },
      {
        path: "contact_us",
        element: <ContactUs/>
      },
      {
        path: "gallery",
        element: <Gallery/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
    < RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

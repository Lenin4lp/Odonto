import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
const LazyAboutUs = React.lazy(() => import("./pages/aboutUs/AboutUs.jsx"));
const LazyServices = React.lazy(() => import("./pages/services/Services.jsx"));
const LazyContact = React.lazy(() => import("./pages/contact/Contact.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Nosotros",
        element: <LazyAboutUs />,
      },
      {
        path: "/Servicios",
        element: <LazyServices />,
      },
      {
        path: "/Contacto",
        element: <LazyContact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=" block font-mono overflow-x-hidden" translate="no">
      <div className=" ">
        <Navbar />
      </div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>
);

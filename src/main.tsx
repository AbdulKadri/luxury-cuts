import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import BookingPage from "./pages/BookingPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ThankYouPage from "./pages/ThankYouPage.tsx";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/services",
    element: (
      <Layout>
        <ServicesPage />
      </Layout>
    ),
  },
  {
    path: "/products",
    element: (
      <Layout>
        <ProductsPage />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
  },
  {
    path: "/booking",
    element: (
      <Layout>
        <BookingPage />
      </Layout>
    ),
  },
  {
    path: "/thankyou",
    element: (
      <Layout>
        <ThankYouPage />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

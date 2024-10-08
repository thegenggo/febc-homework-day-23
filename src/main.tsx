import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './pages/ProductPage.tsx';
import CheckoutPage from './pages/CheckoutPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/products/:productId",
    element: <ProductPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

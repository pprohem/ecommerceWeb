import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { Normalize } from 'styled-normalize';
import { AuthProvider } from './context/AuthProvider';
import { CartProvider } from './context/CartContext/cart';
import { AppRoutes } from './Routes/routes';
import { GlobalStyle } from './styles/global';
import { Theme } from './styles/Theme';

export default function App() {
  return (
   <>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
            <Theme>
              <AppRoutes />
                <GlobalStyle />
              <Normalize />
            </Theme>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    <ToastContainer />
    </>
  )
}

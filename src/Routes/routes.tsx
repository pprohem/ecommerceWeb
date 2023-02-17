import { Navigate, Route, Routes } from 'react-router-dom'
import { NotFound } from '../pages/404Page'
import LoginPage from '../pages/Login'
import MainPage from '../pages/Main'
import BebidasPage from '../pages/Main/Bebidas'
import BurgersPage from '../pages/Main/Burgers'
import CartPage from '../pages/Main/Cart'
import PizzasPage from '../pages/Main/Pizzas'
import SobremesasPage from '../pages/Main/Sobremesas'
import AdmPage from '../pages/MainAdm'
import Products from '../pages/MainAdm/Products'
import RegisterPage from '../pages/Register'

import { ReactNode, useEffect, useState } from 'react'
import { isAuthenticated, isAuthenticatedAdmin, isLogged } from '../services/auth'

type PrivateAdminProps = {
  children: ReactNode;
};

interface RoutesPath {
  path: string;
}

/**
 * If the user is authenticated, render the children. If not, redirect to the login page
 * @param {PrivateAdminProps}  - JSX.Element
 */
const PrivateAdmin = ({ children }: PrivateAdminProps): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState<string | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = await isAuthenticatedAdmin();
        setIsAuthenticated(auth);
        setIsLoading(false);
      } catch (error) {
        setIsAuthenticated("false");
      }
    };
    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center" style={{ fontSize: "45px" }}>
        Loading...
      </div>
    );
  } else if (isAuthenticated === "true") {
    return <>{children}</>;
  } else if (isAuthenticated === "Failed to refresh token") {
    localStorage.removeItem("user");
    return <Navigate to="/login" />;
  } else {
    return <Navigate to="/forbidden" />;
  }
};

/**
 * If the user is authenticated, render the children. If not, redirect to the forbidden page.
 * @param {PrivateAdminProps}  - JSX.Element =&gt; {
 */
const PrivateRoute = ({ children }: PrivateAdminProps): JSX.Element => {
  const [isAuth, setIsAuthenticated] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = await isAuthenticated();
        setIsAuthenticated(auth);
        setIsLoading(false);
      } catch (error) {
        setIsAuthenticated("false");
      }
    };
    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center" style={{ fontSize: "45px" }}>
        Loading...
      </div>
    );
  } else if (isAuth === "true") {
    return <>{children}</>;
  } else if (isAuth === "Failed to refresh token") {
    localStorage.removeItem("user");
    return <Navigate to="/login" />;
  } else {
    return <Navigate to="/forbidden" />;
  }
};

const IsLoggedIn = ({ children }: PrivateAdminProps): JSX.Element => {
  const auth = isLogged();

  if (!auth) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
};
export function AppRoutes() {
  return (
    
    <Routes>
    <Route path='/login' element={
      
    <IsLoggedIn>
      <LoginPage />
    </IsLoggedIn>}/>
      
    <Route path='signup' element={
      <IsLoggedIn>
        <RegisterPage />
      </IsLoggedIn>
    }/>
      
      
      <Route path='/' element={<MainPage/>}>
        <Route path='/' element={<BurgersPage/>}/>
        <Route path='pizzas' element={<PizzasPage/>}/>
        <Route path='bebidas' element={<BebidasPage/>}/>
        <Route path='sobremesas' element={<SobremesasPage/>}/>
        <Route path='cart' element={<CartPage/>}/>
      </Route>


      <Route path='mainadm' element={<AdmPage />}>
        <Route path='products' element={<Products />} />
      </Route>

      <Route path="*" element={<Navigate to= "/404" />}/>
      <Route path='/404' element={<NotFound />}/>
    </Routes>
  )
}

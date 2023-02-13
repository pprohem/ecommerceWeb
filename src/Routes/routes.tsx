import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/Login'
import MainPage from '../pages/Main'
import BebidasPage from '../pages/Main/Bebidas'
import BurgersPage from '../pages/Main/Burgers'
import PizzasPage from '../pages/Main/Pizzas'
import SobremesasPage from '../pages/Main/Sobremesas'
import RegisterPage from '../pages/Register'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='signin' element={<LoginPage />}/>
      <Route path='signup' element={<RegisterPage />}/>
      <Route path='/' element={<MainPage/>}>
        <Route path='/' element={<BurgersPage/>}/>
        <Route path='pizzas' element={<PizzasPage/>}/>
        <Route path='bebidas' element={<BebidasPage/>}/>
        <Route path='sobremesas' element={<SobremesasPage/>}/>
      </Route>
    
    </Routes>
  )
}

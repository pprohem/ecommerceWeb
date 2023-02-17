import { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { CgLogOut } from 'react-icons/cg';
import { FaUserAstronaut } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg';
import menuImg from '../../assets/menu.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg';
import { getUserLocalStorage } from '../../context/AuthProvider/util';
import api2 from '../../services/api';
import { Button, Container, Link, Navbar } from "./styles";
 


export function Sidebar ( )  {
    const [menuOpen, setMenuOpen] = useState(false)
    const user = getUserLocalStorage();
    const navigate = useNavigate();
    function handleToggleMenu () {
         setMenuOpen(!menuOpen)
         
    }
    function handleSignout() {
        api2
          .post("/auth/signout")
          .then(() => {
            localStorage.removeItem("user");
            navigate("/");
            toast.warning("Usuário deslogado");
          })
          .catch((error) => {
            if (error.message === "Failed to refresh token") {
              navigate("/login");
            }
          });
      }

    return(
        <Container isMenuOpen={menuOpen}>
            
            <Button onClick ={handleToggleMenu} type='button'>
                
                <img src={menuImg} alt="botão para abrir menu" />
            </Button>
            <Navbar>
                <ul>
                    <li>
                        <Link to="/">
                            <BurgerIcon  />
                            <span>
                                Hamburguer
                            </span>
                        </Link>
                        
                        <Link  to="pizzas">
                            <PizzaIcon  />
                            <span>
                                Pizza
                            </span>
                        </Link>
                        
                        <Link to="bebidas">
                            <SodaPopIcon />
                            <span>
                                Bebidas
                            </span>
                        </Link>
                        
                        <Link to="sobremesas">
                            <IceCreamIcon  />
                            <span>
                                Sobremesas
                            </span>
                        </Link>

                        <Link to ="cart">

                            <BsCart  color='#FFF'/>
                            <span>
                                Carrinho
                            </span>
                        </Link>
                        
                        
                        <Link 
                        to ={user == null ? 'login' : '/'}>
                            {user == null? <FaUserAstronaut/> : <CgLogOut onClick={handleSignout}/>}
                            <span>
                                {user === null ? 'Login' : 'Logout'}
                            </span>
                        </Link>

                    </li>
                </ul>
            </Navbar>
            
        </Container>
    )
}
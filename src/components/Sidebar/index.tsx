import { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg';

import menuImg from '../../assets/menu.svg';
import { Button, Container, Link, Navbar } from "./styles";
 

export function Sidebar ( )  {
    const [menuOpen, setMenuOpen] = useState(false)


    function handleToggleMenu () {
         setMenuOpen(!menuOpen)
         
    }

    return(
        <Container isMenuOpen={menuOpen}>
            
            <Button onClick ={handleToggleMenu} type='button'>
                
                <img src={menuImg} alt="botão para abrir menu" />
            </Button>
            <Navbar>
                <ul>
                    <li>
                        <Link to="mainpage">
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

                        <Link to ="mainpage">

                            <BsCart  color='#FFF'/>
                            <span>
                                Carrinho
                            </span>
                        </Link>

                    </li>
                </ul>
            </Navbar>
            
        </Container>
    )
}
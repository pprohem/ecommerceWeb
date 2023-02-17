import { useState } from 'react';
import { BsPersonLinesFill } from 'react-icons/bs';



import menuImg from '../../assets/menu.svg';
import { Button, Container, Link, Navbar, PurchasesIcon, UpdateIcon } from "./styles";
 

export function SidebarAdm ( )  {
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
                        <Link to="products">
                            <UpdateIcon />
                            <span>
                               EditProduto
                            </span>
                        </Link>
                        
                        <Link  to="pizzas">
                            <PurchasesIcon  />
                            <span>
                                Pedidos
                            </span>
                        </Link>
                        
                        <Link to="bebidas">
                            <BsPersonLinesFill />
                            <span>
                                Bebidas
                            </span>
                        </Link>
                        
                      

                    </li>
                </ul>
            </Navbar>
            
        </Container>
    )
}
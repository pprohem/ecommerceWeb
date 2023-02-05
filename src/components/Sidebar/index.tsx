import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg';

import menuImg from '../../assets/menu.svg';
import { Button, Container, Link, Navbar } from "./styles";
 

export function Sidebar ( )  {
    return(
        <Container>
            
            <Button type='button'>
                <img src={menuImg} alt="botão para abrir menu" />
            </Button>
            <Navbar>
                <ul>
                    <li>
                        <Link className="active" href= "#">
                            <BurgerIcon  />
                            <span>
                                Hamburguer
                            </span>
                        </Link>
                        
                        <Link  href= "#">
                            <PizzaIcon  />
                            <span>
                                Pizza
                            </span>
                        </Link>
                        
                        <Link  href= "#">
                            <SodaPopIcon />
                            <span>
                                Bebidas
                            </span>
                        </Link>
                        
                        <Link  href= "#">
                            <IceCreamIcon  />
                            <span>
                                Sobremesas
                            </span>
                        </Link>
                    </li>
                </ul>
            </Navbar>
            
        </Container>
    )
}
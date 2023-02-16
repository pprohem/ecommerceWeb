import { useContext } from 'react';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/CartContext/cart';
import { currencyFormat } from '../../helpers/currencyFormat';
import { Loading } from '../Loading';
import { Container } from "./styles";


interface CardsProps { 
    cards: any[]; 
}


export default function Cards ({cards}: CardsProps) { 

    const {handleAddItemToCart} = useContext(CartContext)



    return(
    <Container>
        {!cards.length ? (
        <Loading/>
        ) : (
        cards.map((card) => (
            <div key={card.id} className="card">
                <h2>{card.name}</h2>
                <img src={card.imageUrl} alt={card.name}/>
                <p>{card.description}</p>
                <div>
                    <strong>{currencyFormat(card.price)}</strong>
                    <button onClick={() => {
                        handleAddItemToCart(
                        card.id , 
                        card.name, 
                        card.imageUrl, 
                        card.price
                    )
                    toast(`Produto: ${card.name} adicionado ao carrinho!`, {
                        position: "top-center",
                        autoClose: 800,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    
                    
                    }} type ='button'>
                        <FiPlus/>
                    </button>
                </div>
            </div>
        ))
        )}
    </Container>
    )
}
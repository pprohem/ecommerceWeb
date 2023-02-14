import { FiPlus } from 'react-icons/fi';
import { currencyFormat } from '../../helpers/currencyFormat';
import { Loading } from '../Loading';
import { Container } from "./styles";

interface CardsProps { 
    cards: any[]; 
}

export default function Cards ({cards}: CardsProps) { 
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
                    <button type ='button'>
                        <FiPlus/>
                    </button>
                </div>
            </div>
        ))
        )}
    </Container>
    )
}
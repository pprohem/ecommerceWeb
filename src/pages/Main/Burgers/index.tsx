import Cards from "../../../components/Cards"
import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTittle"

export  default function Burgers (){
    const data = [ 
        {
            id: 1,
            snack: 'burguer',
            name: 'Mega',
            description: ' O artesanal tamanho família, recheado com 2 carnes, cebola frita, bacon, cheddar ingles e salada',
            price: 27.99,
            image: "https://i.imgur.com/xhIc4ef.jpeg"

        },
        {
            id: 12,
            snack: 'burguer',
            name: 'Extra Bacon',
            description: 'Criado para os amantes de bacon, possui todas as suas camadas com bacon bem assado, queijo e carne',
            price: 24.99,
            image: "https://i.imgur.com/B4J04AJ.jpg"

        }
    ]

   
    
    
    return ( 
        <>
            <Head title='Hambúrgueres' description="Nossos melhores burguers"/>
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Cards cards={data}></Cards>
        </>

    )
}
   
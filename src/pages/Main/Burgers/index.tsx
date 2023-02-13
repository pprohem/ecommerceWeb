import { useState } from 'react'
import Cards from "../../../components/Cards"
import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTittle"






export  default function Burgers (){
    const [burgers, setBurgers] = useState([])
   
    
    return ( 
        <>
            <Head title='Hambúrgueres' description="Nossos melhores burguers"/>
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Cards cards={burgers}></Cards>
        </>

    )
}
   
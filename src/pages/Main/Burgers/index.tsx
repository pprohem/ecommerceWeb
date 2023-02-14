import { useEffect, useState } from 'react'
import Cards from "../../../components/Cards"
import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTittle"
import burgerService from '../../../services/Requests/burgerRequest'




export  default function Burgers (){
    const [burgers, setBurgers] = useState([])
    
    
    useEffect(() => {
        burgerService
        .getAll()
        .then((res) => {
            setBurgers(res.data.content)
        })
        .catch((err) => { 
            console.error("ops! ocorreu um error: " + err)
        })
    }, [])
    
    
    
    
    return ( 
        <>
            <Head title='Hambúrgueres' description="Nossos melhores burguers"/>
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Cards cards={burgers}></Cards>
        </>

    )
}
   
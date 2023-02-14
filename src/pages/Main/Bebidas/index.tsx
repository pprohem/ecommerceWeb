import { useEffect, useState } from "react"
import Cards from "../../../components/Cards"
import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTittle"
import sodaService from "../../../services/Requests/sodaRequest"

export  default function Bebidas (){
    
    
    
    const [drinks, setDrinks] = useState([])
    
    
    useEffect(() => {
        sodaService
        .getAll()
        .then((res) => {
            setDrinks(res.data.content)
        })
        .catch((err) => { 
            console.error("ops! ocorreu um error: " + err)
        })
    }, [])
    
    return (
        
        <>
        <Head title='Bebidas' description="Bebidas pra te satisfazer"/>
        <SnackTitle>Bebidas</SnackTitle>
        <Cards cards={drinks}></Cards>
    </>
    )
}
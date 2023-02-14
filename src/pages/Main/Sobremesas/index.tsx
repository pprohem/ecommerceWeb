import { useEffect, useState } from "react"
import Cards from "../../../components/Cards"
import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTittle"
import dessertService from "../../../services/Requests/dessertRequest"

export  default function Sobremesas (){
    const [desserts, setDesserts] = useState([])
    
    
    useEffect(() => {
        dessertService
        .getAll()
        .then((res) => {
            setDesserts(res.data.content)
        })
        .catch((err) => { 
            console.error("ops! ocorreu um error: " + err)
        })
    }, [])
    return (
        <>
        <Head title='Sobremesas' description="Sobremesas deliciosas!"/>
        <SnackTitle>Sobremesas</SnackTitle>
        <Cards cards={desserts} ></Cards>
    </>
    )
}
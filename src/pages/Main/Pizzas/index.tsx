import { useEffect, useState } from "react"
import Cards from "../../../components/Cards"
import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTittle"

import pizzaService from "../../../services/Requests/pizzaRequest"

export  default function Pizzas (){
  const [pizzas, setPizzas] =  useState([])
    
    
  useEffect(() => {
    pizzaService
    .getAll()
    .then((res) => {
        setPizzas(res.data.content)
    })
    .catch((err) => { 
        console.error("ops! ocorreu um error: " + err)
    })
}, [])


    return (
        <>
            <Head title='Pizzas' description="Pizzas deliciosas!"/>
            <SnackTitle>Pizzas</SnackTitle>
            <Cards cards={pizzas}></Cards>
      
        </>
    )
}
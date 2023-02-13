import { useEffect, useState } from "react"
import Cards from "../../../components/Cards"
import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTittle"
import { getPizzas } from "../../../services/api"

export  default function Pizzas (){
  const [pizzas, setPizzas] =  useState([])
    
    
  useEffect(() => {
    (async () => {
        const pizzasRequest = await getPizzas()

        setPizzas(pizzasRequest.data)
   
    })()
}, [])


    return (
        <>
            <Head title='Pizzas' description="Pizzas deliciosas!"/>
            <SnackTitle>Pizzas</SnackTitle>
            <Cards cards={pizzas}></Cards>
      
        </>
    )
}
import { useEffect, useState } from "react"
import Cards from "../../../components/Cards"
import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTittle"
import { getDrinks } from "../../../services/api"
export  default function Bebidas (){
    const [drinks, setDrinks] =  useState([])
    
    
    useEffect(() => {
      (async () => {
          const drinksRequest = await getDrinks()
  
          setDrinks(drinksRequest.data)
     
      })()
  }, [])
    
    return (
        
        <>
        <Head title='Bebidas' description="Bebidas pra te satisfazer"/>
        <SnackTitle>Bebidas</SnackTitle>
        <Cards cards={drinks}></Cards>
    </>
    )
}
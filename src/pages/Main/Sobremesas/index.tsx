import { useEffect, useState } from "react"
import Cards from "../../../components/Cards"

import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTittle"
import { getIceCreams } from "../../../services/api"
export  default function Sobremesas (){
    const [iceCreams, setIceCreams] = useState([])
   
    useEffect(() => {
        (async () => {
            const iceCreamRequest = await getIceCreams()

            setIceCreams(iceCreamRequest.data)
            
        })()
    }, [])
    
    return (
        <>
        <Head title='Sobremesas' description="Sobremesas deliciosas!"/>
        <SnackTitle>Sobremesas</SnackTitle>
        <Cards cards={iceCreams} ></Cards>
    </>
    )
}
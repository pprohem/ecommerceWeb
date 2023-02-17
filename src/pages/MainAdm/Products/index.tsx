import { useEffect, useState } from 'react';
import { ProductAdmCard } from "../../../components/ProductAdmCard";
import api2 from '../../../services/api';
import { ExSmallDiv, LargeDiv, MediumDiv, SmallDiv, Titles } from "./styled";

export default function Products () { 
    const [products, setProducts] = useState([])


    useEffect(() => { 
       api2
       .get('/products')
       .then((res) => {
          setProducts(res.data)
          
       })
       .catch((err) => { 
        console.error("ops! ocorreu um error: " + err)
    })
    }, [])
    
    console.log(products)





    return (
        <>
        <Titles>
            <SmallDiv>IMAGEM</SmallDiv>
            <ExSmallDiv>ID</ExSmallDiv>
            <MediumDiv>NAME</MediumDiv>
            <LargeDiv>DESCRIPTION</LargeDiv>
            <SmallDiv>PRICE</SmallDiv>
            <SmallDiv>CATEGORIE</SmallDiv>
            <SmallDiv>STATUS</SmallDiv>
            <LargeDiv>ACTIONS</LargeDiv>
        </Titles>
         
         <ProductAdmCard products={products}/>
         <ProductAdmCard products={products}/>
        </>
    )
}
import { currencyFormat } from "../../helpers/currencyFormat";
import { Container, DivButtons, DivCategoryName, DivContentButtons, DivDescription, DivId, DivImg, DivIsActive, DivName, DivPrice, TrashIcon, UpdateIcon } from "./styles";
interface ProductType { 
   products: any;


}



export function ProductAdmCard ({products}: ProductType ) { 
    return(
        products.map((product:any) => (
            <Container key={product.id}>
           
            <DivImg> 
                 <img src={product.imageUrl} />
            </DivImg>
            
             <DivId>
                 <h2>{product.id}</h2>
             </DivId>
 
 
            <DivName>
                 <h2>{product.name}</h2>
            </DivName>
             
 
             <DivDescription>
                  <h2>{product.description}</h2>
             </DivDescription>
 
             <DivPrice>
                <h2>{currencyFormat(product.price)}</h2> 
             </DivPrice>
             
             <DivCategoryName>
                 <h2>{product.categorie}</h2>
             </DivCategoryName>
 
             <DivIsActive>
                 <div className="active"></div>
                 <h2>Ativo</h2>
             </DivIsActive>
 
             <DivButtons>
                
                 <DivContentButtons>
                     <UpdateIcon />
                     <TrashIcon />
                    
                 </DivContentButtons>
             </DivButtons>
 
         </Container>
        ))
       
    )
}
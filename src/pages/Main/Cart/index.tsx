import { useContext } from "react";
import Head from "../../../components/Head";
import { CartContext } from "../../../context/CartContext/cart";
import { currencyFormat } from "../../../helpers/currencyFormat";
import { ActionTitle, Button, ButtonCheckout, Container, ContentDiv, DivAbout, DivAmount, DivCart, DivCheckout, DivCounter, DivHeader, DivPrices, DivRemove, DivSubAndItems, DivTotal, DivTotalAmount, HeaderTitle, ImageBox, ImgProduct, Items, LineBreak, Number, Subtotal, Title } from "./styled";

export default function CartPage () { 
    
    const {
        productsCart, clearCart, handleAddItemToCart, handleRemoveItemToCart, removalItem} = useContext(CartContext); 
        
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        let totalPrice: number = 0; 

    return( 
            <Container>
            <Head title={`🛒 : ${productsCart.length} itens`} description="Realize seu pedido"/>
                <ContentDiv>
                    
                    <DivHeader>
                        <HeaderTitle>Shopping Cart</HeaderTitle>
                        <ActionTitle>Remove All</ActionTitle>
                    </DivHeader>
                   

                   {productsCart?.map((products) => { 
                        const subTotal: number = products.price * products.quantidade ;
                        totalPrice += subTotal; 
                        return (
                            <DivCart key={products.id}>
                        
                                <ImageBox>
                                    <ImgProduct src={products.imageUrl} />
                                </ImageBox>
                                
                                <DivAbout>
                                    <Title>{products.name}</Title>
                                </DivAbout>

                                <DivCounter>
                                    <Button 
                                    onClick={() => {handleRemoveItemToCart(products.id)}}>-</Button>
                                    <Number>{products.quantidade}</Number>
                                    <Button 
                                    onClick={() => {handleAddItemToCart(products.id, products.name, products.imageUrl, products.price)}}>+</Button>
                                </DivCounter>

                                <DivPrices>
                                    <DivAmount>{currencyFormat(subTotal)}</DivAmount>
                                    <DivRemove> <u onClick={() => {removalItem(products.id)}}>Remove</u></DivRemove>
                                </DivPrices>
                            </DivCart>
                        )
                   })}
                    
                    <LineBreak />
                        
                    <DivCheckout>
                            <DivTotal>
                                <DivSubAndItems>
                                    <Subtotal>Subtotal</Subtotal>
                                    <Items>{productsCart.length} items</Items>
                                </DivSubAndItems>
                                <DivTotalAmount>{currencyFormat(totalPrice)}</DivTotalAmount>
                            </DivTotal>
                            
                            <DivSubAndItems>
                                <ButtonCheckout>Checkout</ButtonCheckout>
                            </DivSubAndItems>
                    </DivCheckout>
                </ContentDiv>
            </Container>

    )
}
import Head from "../../../components/Head";
import { ActionTitle, Button, ButtonCheckout, Container, ContentDiv, DivAbout, DivAmount, DivCart, DivCheckout, DivCounter, DivHeader, DivPrices, DivRemove, DivSave, DivSubAndItems, DivTotal, DivTotalAmount, HeaderTitle, ImageBox, ImgProduct, Items, LineBreak, Number, Subtitle, Subtotal, Title } from "./styled";

export default function CartPage () { 
    
    
    
    
    
    
    return( 
            <Container>
            <Head title='Carrinho 💸' description="Realize seu pedido"/>
                <ContentDiv>
                    
                    <DivHeader>
                        <HeaderTitle>Shopping Cart</HeaderTitle>
                        <ActionTitle>Remove All</ActionTitle>
                    </DivHeader>
                   
                    <DivCart>
                        
                        <ImageBox>
                            <ImgProduct src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQcHbxCjB7FY6Rttw1VZFdh0gIZmm4MLLjfmD0dhA11saxBKG_D49VVkmlvz3sE71-b" />
                        </ImageBox>
                        
                        <DivAbout>
                            <Title>Pizza Teste</Title>
                            <Subtitle>Grande</Subtitle>
                        </DivAbout>

                        <DivCounter>
                             <Button>+</Button>
                              <Number>1</Number>
                             <Button>-</Button>
                        </DivCounter>

                        <DivPrices>
                            <DivAmount>$ 72.99</DivAmount>
                            <DivSave><u>Save for later</u></DivSave>
                            <DivRemove> <u>Remove</u></DivRemove>
                        </DivPrices>
                    </DivCart>


                    <DivCart>
                        
                        <ImageBox>
                            <ImgProduct src="https://svb.org.br/images/bacio.jpg" />
                        </ImageBox>
                        
                        <DivAbout>
                            <Title>Gelato Teste</Title>
                            <Subtitle>Medio</Subtitle>
                        </DivAbout>

                        <DivCounter>
                             <Button>+</Button>
                              <Number>4</Number>
                             <Button>-</Button>
                        </DivCounter>

                        <DivPrices>
                            <DivAmount>$ 89.99</DivAmount>
                            <DivSave><u>Save for later</u></DivSave>
                            <DivRemove> <u>Remove</u></DivRemove>
                        </DivPrices>

                    </DivCart>

                    
                    <LineBreak />
                        
                    <DivCheckout>
                            <DivTotal>
                                <DivSubAndItems>
                                    <Subtotal>Subtotal</Subtotal>
                                    <Items>5 items</Items>
                                </DivSubAndItems>
                                <DivTotalAmount>$162.98</DivTotalAmount>
                            </DivTotal>
                            
                            <DivSubAndItems>
                                <ButtonCheckout>Checkout</ButtonCheckout>
                            </DivSubAndItems>
                    </DivCheckout>
                </ContentDiv>
            </Container>

    )
}
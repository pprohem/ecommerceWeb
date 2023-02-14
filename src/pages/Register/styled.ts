import styled from "styled-components";



export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background: #ADA996;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    align-items: center;
    display: flex;
    justify-content: center;



 
`
export const LoginInput = styled.input `
    width: 80%;
    padding: 12px 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    transition: 0.5s;
    margin-top: 0.5rem;
    @media screen and (max-width: 768px){
        width: 70%
        
    
    }
    

`

export const DivForm = styled.div `
 
    width: 35vw;
    height: 90vh;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 768px){
        width: 100vw;
        height: 100vh;
    
    }
`

export const Input = styled.input `
    border: none;
    padding: 5px;
    background-color: #1E232E;
    font-size: small;
    font-weight: bold;
    margin-top: 10px;
    height: 36px;
    width: 80%;
    color: #ff3700;
   
   
   .input:focus {
    outline-color: white;
    place-content: "Enter your message!";
   }
   `

export const Div = styled.div `
display: flex;
margin: 25px;
width: 100%;
color: white;
flex-direction: column;
margin-left: 150px;
`

export const SubmitInput = styled.input `
    width: 80%;
    background-color: ${({theme})=> theme.colors.red};
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover { 
        background-color: ${({theme})=> theme.colors.yellow};
        color: #333;
    }

    

`

export const EyeButton = styled.button `
width: 25px;
background-color: black;
border: none;
:hover {
    cursor: pointer;
}
`
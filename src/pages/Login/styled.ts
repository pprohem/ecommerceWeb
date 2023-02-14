import styled from "styled-components";



export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ADA996;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



`

export const BoxLogin = styled.div `
    width: 50vw;
    height: 70vh;
    background-color: #0C0D0F;
    display: flex;
    flex-direction: column;
    border: 1px solid #333;
 
    
    @media (max-width: 768px) { 

        width: 100vw;
        height: 100vh;
    }


`

export const ContentDiv = styled.div `
    width: 100%;
    height: 100%;
    background-color: #0C0D0F;
    border-left: 0.5px solid black;
    display: flex;
    align-items: center;
    justify-content: center;

    

`

export const ImageDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 20%;
    background-color: black;
    margin-top: 25px;

    @media (max-width: 768px) { 

    height: 30%;
    align-items: center;
    justify-content: center;
    img { 
        height: 130px;
        width: 300px;

    }
}

`

export const ImageLogin = styled.img `
    height: 100%;
    width: 100%;
    background-color: #0C0D0F;


`


export const LoginCard = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #0C0D0F;

  @media (max-width: 768px) { 
        
        display: flex;
    }
  

`

export const Log = styled.div `
    margin: 0;
    font-size: 18px;
    color: ${({theme})=> theme.colors.white};
    display: flex;
    align-items: center;

`

export const FormLogin = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

`

export const FormGroup = styled.div`
    text-align: left;
    width: 80%;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const DivAlign = styled.div `
    height: 40px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LoginLabel = styled.label `
    font-size: 18px;
    margin-bottom: 5px;
    color: ${({theme})=> theme.colors.white}


`

export const LoginInput = styled.input `
    width: 80%;
    padding: 12px 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    transition: 0.5s;
    

`

export const SubmitInput = styled.button `
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
    background-color: black;
    height: 40px;
    margin-top: 19px;
    :hover {
        cursor: pointer;
    }
`

export const DivPass = styled.div`
    margin-left: 70px;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;


`


export const DivText = styled.div `
    width: 80%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
 

    @media (max-width: 768px) { 
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`


export const Link = styled.a `
    text-decoration: none;
    color: ${({theme})=> theme.colors.red};
    cursor: pointer;
    font-size: 18px;

`
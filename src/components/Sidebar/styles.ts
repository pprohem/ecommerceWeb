import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface ContainerProps {
    isMenuOpen: boolean; 
}


export const Container = styled.aside<ContainerProps> `
    background-color: ${(props) => props.theme.colors.red};
    

    ${({isMenuOpen}) => 
     isMenuOpen ? css`width: 16.3rem; ` : css `width: 7.75rem; `
    }


  
    padding: 2rem 0;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: width 0.3s; 
    


    @media (max-width: 768px) { 
        width: 100%;
        height: 5rem;
        display: flex;
        margin-top: 5px;
        justify-content: center;
        align-items: center;
        button{
            display: none;
        }
        span{
            display: none
        }

        
    }
` 


export const Button = styled.button `
    background: none;
    width: 100%;
    border: none;
    cursor: pointer
`



export const Navbar = styled.nav`
    flex: 1 ; 
    width: 100%;
    height: 100%;

    ul{ 
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem

    }



`

export const Link = styled(NavLink) `

    width: fit-content;
    position: relative;
    padding-left: 1.875rem;
    padding-right: 1.875rem;
    

    display: flex;
    align-items: center;
    gap:2rem;
    margin-bottom: 20px;
    

    svg{
        fill: ${({theme}) => theme.colors.white};
        width: 4rem;
        height: 4rem;
        transition: fill 0.3s
    }

    span{
        font-size: 1rem;
        font-weight: 500;
        transition: color 0.3s
    }

    &.active { 
        &::after { 
            content: " " ;
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({theme}) => theme.colors.yellow};
            width: 5px;
            height: calc(100% +10px);

            border-radius: 0 5px 5px 0;
        }
        
        svg{
            fill: ${({theme}) => theme.colors.yellow};
        }        

        span {
            
            color: ${({theme}) => theme.colors.yellow};
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 0;
        
        svg{
           width: 3.55rem ;
           height: 3.5rem;
        }
        &.active{ 
        &::after{
                display: none
            }
        }
    }
  
`
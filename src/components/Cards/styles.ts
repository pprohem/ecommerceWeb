import { darken } from "polished";
import styled from "styled-components";
export const Container = styled.div `
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 1.75rem;

    @media (max-width: 500px) { 
        grid-template-columns: 1fr ;
    }

    .card{
        position: relative;
        background: ${({theme})=> theme.colors.black};
        padding: 1.75rem 1.5rem;
        border-radius: 8px;

        h2{ 
            margin-bottom: 0.75rem;
            font-weight: 700;
            font-size: 1.5rem;
            text-align: center;
            text-transform: uppercase;
        }

        img{
            object-fit: cover;
            width: 100%;
            height: 11.25rem;
            border-radius: 8px;
            margin-bottom: 0.375rem;
        }

        p{
            font-size: .875rem;

        }


        div { 
            margin-top: .875rem;
            display: flex;
            align-items: center;
            justify-content: space-between;


            strong{
                font-size: 2rem;
                font-weight: 500;
            }

            button { 
                background-color: ${({theme}) => theme.colors.red};
                border: none;
                border-radius: 50%;
                height: 3rem;
                width: 3rem;

                display: flex;
                align-items: center;
                justify-content: center;


                svg{ 
                    stroke: ${({theme}) => theme.colors.white};
                    width: 1.5rem;
                    height: 1.5rem;
                }
                
                :hover { 
                    background: ${darken(.1, '#AA2424')}
                    
                }
            }
        }


    }
`
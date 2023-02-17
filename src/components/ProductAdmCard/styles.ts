import { CgTrashEmpty } from 'react-icons/cg'
import { GrEdit } from 'react-icons/gr'
import styled from "styled-components"


export const Container = styled.div `
    margin-top: 3px;
    border-radius: 8px;
    
    background-color: white;
    color: black;

    width: 80%;
    height: 10%;
    
    display: flex;
    
    flex-direction: row;

`
export const DivId = styled.div`
   
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid black;
    border-right: 1px solid black;

    font-size: 12px;


`

export const DivName = styled.div`
   
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid black;
    border-right: 1px solid black;

    font-size: 12px;


`
export const DivDescription = styled.div`
  
    width: 20%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid black;
    border-right: 1px solid black;
    font-size: 8px;


`
export const DivCategoryName = styled.div`
    background-color: white;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid black;
    border-right: 1px solid black;
    font-size: 12px;


`
export const DivPrice = styled.div`
    background-color: white;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid black;
    border-right: 1px solid black;
    font-size: 16px;


`


export const DivIsActive = styled.div `
    width: 10%; 
    
    
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-right: 1px solid black;
    font-size: 12px;
    

    div{
        margin-right: 10px;
        height: 15px;
        width: 15px;
        background-color: green;
        border-radius: 50%;
    }
`


export const DivImg = styled.div`

    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid black;


    img { 
        margin-top: 35px;
        width: 50px;
        height: 50px;
        border-radius: 8px;
    }
`

export const DivButtons = styled.div `
    border-radius: 8px;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid black;
   

`

export const DivContentButtons = styled.div `
    width: 90%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  
   

`

export const TrashIcon = styled(CgTrashEmpty) `
    color: red; 
    width: 25px;
    height: 25px;
    
    &:hover { 
        cursor: pointer;
        margin-bottom: 0.5px;
    }
`
export const UpdateIcon = styled(GrEdit) `
    color: red; 
    width: 25px;
    height: 25px;
    
    &:hover { 
        cursor: pointer;
        margin-bottom: 0.5px;
    }
`
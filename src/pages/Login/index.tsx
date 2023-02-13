import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import logoImg from '../../assets/logo.svg';
import {
    BoxLogin, Container, ContentDiv, DivAlign, DivText, EyeButton, FormGroup, FormLogin,
    ImageDiv, ImageLogin, Link, Log, LoginCard, LoginInput, LoginLabel, SubmitInput
} from "./styled";

export default function LoginPage () { 
    const [passwordShown, setPasswordShown] = useState(false);



    const togglePassword = () => {
        setPasswordShown(!passwordShown);
        
      };
      
    return(
        
        <Container>

            <BoxLogin>
                <ImageDiv>
                    <ImageLogin src={logoImg}/>
                </ImageDiv>

                <ContentDiv>

                <LoginCard>
                    
                    
                    <FormLogin>
                        <FormGroup>
                            <DivAlign>
                                <LoginLabel htmlFor="username">Username:</LoginLabel>
                            </DivAlign>
                           
                            <LoginInput  type="text"/>
                        </FormGroup>
                            
                        <FormGroup >
                            
                            <DivAlign>
                                <LoginLabel htmlFor="password">Password:</LoginLabel>
                                {passwordShown ?
                                    <EyeButton onClick={togglePassword}> <BsEyeSlash size={20}  color={"white"}/>  </EyeButton>
                                    :
                                    <EyeButton onClick={togglePassword}> <BsEye size={20} color={"white"} />  </EyeButton> 
                                    }
                            </DivAlign>
                                <LoginInput  type={passwordShown ? "text" : "password"}/>
                                    

                         

                        </FormGroup>
                       
                        <FormGroup>
                            <SubmitInput value="LOGIN" type="submit" />
                        </FormGroup>
                        
                        <DivText>
                            <Log><Link href='signup'>Cadastre-se</Link> e aproveite o melhor da gastronomia no conforto de sua casa.</Log>
                        </DivText>
                        
                    </FormLogin>
                </LoginCard>


                </ContentDiv>
            </BoxLogin>
        </Container>
   
    )
}
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../context/AuthProvider/useAuth';
import api2 from '../../services/api';
import {
    BoxLogin, Container, ContentDiv, DivAlign, DivText, EyeButton, FormGroup, FormLogin,
    ImageDiv, ImageLogin, Link, Log, LoginCard, LoginInput, LoginLabel, SubmitInput
} from "./styled";

export default function LoginPage () { 
    const auth = useAuth()
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");




    const togglePassword = () => {
        setPasswordShown(!passwordShown);
        
      };


       const handleSignIn = () => { 
        api2
        .post("/auth/signin", {
          username: username,
          password: password,
        })
        .then((request) => {
          toast.success("Login successful !");
          auth.authenticate(request.data);
          navigate("/");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
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
                                <LoginLabel htmlFor="username">USUARIO:</LoginLabel>
                            </DivAlign>
                           
                            <LoginInput value={username} onChange={(e) => setUsername(e.target.value)} type="text"/>
                        </FormGroup>
                            
                        <FormGroup >
                            
                            <DivAlign>
                                <LoginLabel htmlFor="password">SENHA:</LoginLabel>
                                {passwordShown ?
                                    <EyeButton onClick={togglePassword}> <BsEyeSlash size={20}  color={"white"}/>  </EyeButton>
                                    :
                                    <EyeButton onClick={togglePassword}> <BsEye size={20} color={"white"} />  </EyeButton> 
                                    }
                            </DivAlign>
                                <LoginInput  type={passwordShown ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                                    

                         

                        </FormGroup>
                       
                        <FormGroup>
                            <SubmitInput onClick={handleSignIn}  type="submit"> SIGN IN </SubmitInput>      
                            
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
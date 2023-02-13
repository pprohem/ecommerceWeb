import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Button, Container, Div, DivForm, EyeButton, Input } from './styled';

export default function RegisterPage ( ) { 
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
       
      };

      const confirmTogglePassword = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
        
      };
  
 
    
    
    return(
        <Container>
        <DivForm>
            <h2>CADASTRO</h2>
            
            <Div>
                <h4>USUARIO</h4>
                <Input type="text" name="usuario" placeholder="Usuario" ></Input>
            </Div>
            <Div>
                <h4>EMAIL</h4>
                <Input type="text" name="usuario" placeholder="Email" ></Input>
            </Div>

            <Div>
                <h4>SENHA</h4>
                {passwordShown ?
                    <EyeButton onClick={togglePassword}> <BsEyeSlash size={20}  color={"white"}/>  </EyeButton>
                    :
                    <EyeButton onClick={togglePassword}> <BsEye size={20} color={"white"} />  </EyeButton> 
                }
                <Input type={passwordShown ? "text" : "password"} name="Password" placeholder="Senha"></Input>
            </Div>

            <Div>
                <h4>CONFIRME SUA SENHA</h4>
                {confirmPasswordShown ?
                    <EyeButton onClick={confirmTogglePassword}> <BsEyeSlash size={20}  color={"white"}/>  </EyeButton>
                    :
                    <EyeButton onClick={confirmTogglePassword}> <BsEye size={20} color={"white"} />  </EyeButton> 
               }
                 <Input type={confirmPasswordShown ? "text" : "password"} name="password"  placeholder="Confirmação da Senha"></Input>
            </Div>

            <Button >
                 SALVAR
                <div className="arrow-wrapper">
                 
                    <div className="arrow"></div>

                </div>
            </Button>
           



        </DivForm>

        </Container>
    )
}
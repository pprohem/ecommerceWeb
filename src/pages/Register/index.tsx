import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import userService from '../../services/Requests/userRequest';
import { Container, Div, DivForm, EyeButton, LoginInput, SubmitInput } from './styled';

export default function RegisterPage ( ) { 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
       
      };

      const confirmTogglePassword = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
        
      };

    
    const handleSignUp = (event: any) => {
        if ( password.length <= 5) {
            toast.error('📢 A senha precisa ter no minimo 6 caracteres', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                return;
        } 
        if ( password === "" || username === "" ) {
            toast.error('📢 Os campos não podem ser nulos!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                return;
        } 
        if ( password !== passwordConfirmation) {
            toast.error('📢 Senhas não conferem!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                return;
        } 
        event.preventDefault();
         
        const user = {
          username: username,
          email: email,
          password: password
        };
  
        userService.registerUser(user).then((res) => {
            toast.success('👌👌 Cadastrado com sucesso!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }).catch((error) => {
            console.error(error)
            toast.error('📢 Um erro desconhecido ocorreu!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
    };
  
    
    return(
        <Container>
        <DivForm>
            <h2>CADASTRO</h2>
            
            <Div>
                <h4>USUARIO</h4>
                <LoginInput type="text" name="usuario" placeholder="USUARIO"  onChange={e => setUsername(e.target.value)}></LoginInput>
            </Div>
            <Div>
                <h4>EMAIL</h4>
                <LoginInput type="text" name="usuario" placeholder="Email" onChange={e => setEmail(e.target.value)} ></LoginInput>
            </Div>

            <Div>
                <h4>SENHA</h4>
                {passwordShown ?
                    <EyeButton onClick={togglePassword}> <BsEyeSlash size={20}  color={"white"}/>  </EyeButton>
                    :
                    <EyeButton onClick={togglePassword}> <BsEye size={20} color={"white"} />  </EyeButton> 
                }
                <LoginInput type={passwordShown ? "text" : "password"} name="Password" placeholder="Senha" onChange={e => setPassword(e.target.value)}></LoginInput>
            </Div>

            <Div>
                <h4>CONFIRME SUA SENHA</h4>
                {confirmPasswordShown ?
                    <EyeButton onClick={confirmTogglePassword}> <BsEyeSlash size={20}  color={"white"}/>  </EyeButton>
                    :
                    <EyeButton onClick={confirmTogglePassword}> <BsEye size={20} color={"white"} />  </EyeButton> 
               }
                 <LoginInput type={confirmPasswordShown ? "text" : "password"} name="password"  placeholder="Confirmação da Senha"onChange={e => setPasswordConfirmation(e.target.value)} />
            </Div>

            <SubmitInput onClick={handleSignUp} value="SALVAR" type="submit"     
                            />
           
           <ToastContainer />


        </DivForm>

        </Container>
    )
}
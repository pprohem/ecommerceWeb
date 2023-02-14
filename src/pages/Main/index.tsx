import { Outlet } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Sidebar } from '../../components/Sidebar';
import { Container, SectionLogo } from './styles';



export default function Main() {
  return (
    <Container>
      <Sidebar />
      <SectionLogo>
        <img src={logoImg} />
        <Outlet />
      </SectionLogo>
    </Container>
  )


  
}

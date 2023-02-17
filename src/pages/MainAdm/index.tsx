import { Outlet } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { SidebarAdm } from '../../components/SidebarAdm';
import { Container, SectionLogo } from './styled';



export default function MainAdm() {

  return (
    <Container>
      <SidebarAdm />
        <SectionLogo>
          <img src={logoImg} />
        <Outlet />
      </SectionLogo>
    </Container>
  )


  
}

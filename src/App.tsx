import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './Routes/routes'

import { Normalize } from 'styled-normalize'
import { AuthProvider } from './context/AuthProvider'
import { GlobalStyle } from './styles/global'
import { Theme } from './styles/Theme'

export default function App() {
  return (
   
   <AuthProvider>
    <BrowserRouter>
        <Theme>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </Theme>
      </BrowserRouter>
    </AuthProvider>
  )
}

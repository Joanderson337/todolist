import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import { Router } from '@routes/Router';
import { UserContextProvider } from './context/user.context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (

    <>
      <UserContextProvider>
        <ToastContainer position="bottom-left" />
        <Router />
        <GlobalStyle />
      </UserContextProvider>
    </>

  );
}

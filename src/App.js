import React from 'react';
import styled from 'styled-components'

import Nav from './components/Nav';
import View from './components/View';
import Logo from './components/Logo';

/*AppContextProvider supplies global state; All components nested inside of AppContext provider have access to read and update all global state variables without passing props*/
import AppContextProvider from './AppContextProvider';

import { getScreens } from './utils/getScreens'

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  grid-template-areas:
  "logo view"
  "nav view";

  @media (max-width: ${getScreens('tablet')}){
    display: flex;
    flex-direction: column;
  }
`
const LogoWrapper = styled.div`
  grid-area: logo;
`
const ViewWrapper = styled.div`
  background-color : lightblue;
  grid-area: view;
`
const NavWrapper = styled.div`
  grid-area: nav;
`
function App() {
  return (
    <AppContextProvider>
      <AppWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavWrapper>
          <Nav />
        </NavWrapper>
        <ViewWrapper>
          <View />
        </ViewWrapper>
      </AppWrapper>
    </AppContextProvider>
  );
}

export default App;

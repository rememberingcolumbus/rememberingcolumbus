import React from 'react';
import styled from 'styled-components'
import Nav from './components/Nav';
import View from './components/View';
import Logo from './components/Logo';
import AppContextProvider from './AppContextProvider';


const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* grid-template-rows: auto; */
  grid-template-areas:
  "logo view"
  "nav view";
`
const LogoWrapper = styled.div`
  grid-area: logo;
`
const ViewWrapper = styled.div`
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
        <ViewWrapper>
          <View />
        </ViewWrapper>
        <NavWrapper>
          <Nav />
        </NavWrapper>
      </AppWrapper>
    </AppContextProvider>
  );
}

export default App;

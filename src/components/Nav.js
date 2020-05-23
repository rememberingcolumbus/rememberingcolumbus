import React, { useContext } from 'react'
import styled from 'styled-components'

import { getScreens } from '../utils/getScreens'

import AppContext from '../AppContext'
import NavOption from './NavComponents/NavOption'

const NavWrapper = styled.div`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${getScreens('tablet')}){
    flex-direction: row;
    justify-content: space-evenly;
    min-height: 25vh;
  }
`
export default function Nav() {

  //view provides access to view global state; nav provides access to nav global state
  const { nav } = useContext(AppContext);

  
  return (
    <NavWrapper>
      {nav.options.map((navValue, index) => <NavOption key={`NavOption-${index}`} text={navValue} />)}
    </NavWrapper>
  )
}

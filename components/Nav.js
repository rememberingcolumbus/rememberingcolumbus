import React from 'react'
import styled from 'styled-components'

import { getScreens } from '../utils/getScreens'

import NavOption from './NavComponents/NavOption'

const NavWrapper = styled.div`
  min-height: 75vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${getScreens('tablet')}){
    flex-direction: row;
    justify-content: space-evenly;
    min-height: 15vh;
  }
`
export default function Nav() {

  return (
    <NavWrapper>
      <NavOption text="Home" path="/" />
      <NavOption text="About" path="/about" />
      <NavOption text="Funeral Assistance" path="/funeralassistance" />
      <NavOption text="Memorial" path="/memorial" />
    </NavWrapper>
  )
}

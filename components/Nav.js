import React from 'react'
import styled from 'styled-components'

import { getScreens } from '../utils/getScreens'

import NavOption from './NavComponents/NavOption'

const NavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${getScreens('tablet')}){
    flex-direction: row;
    justify-content: space-around;
    min-height: 15vh;
  }
`
export default function Nav() {

  return (
    <NavWrapper>
      <NavOption text="Home" path="/" />
      <NavOption text="About" path="/about" />
      <NavOption text="Funeral Resources" path="/funeralresources" />
      <NavOption text="Emotional Health" path="/emotionalhealth" />
      <NavOption text="Memorial" path="/memorial" />
    </NavWrapper>
  )
}

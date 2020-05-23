import React, { useContext } from 'react'
import styled from 'styled-components'

import AppContext from '../../AppContext'

import { getColor } from '../../utils/getColor'
import { getScreens } from '../../utils/getScreens'

const NavOptionWrapper = styled.div`

@media (max-width : ${getScreens('mobile')}){
  font-size: .75rem;
}

&:hover{
  color: ${getColor('accent')};
  text-decoration: underline;
  cursor: pointer;
}
`
  


export default function NavOption({text}) {
 
  const { view } = useContext(AppContext);
  return (
    <NavOptionWrapper onClick={() => view.controller(text)} >
      <h1>{text}</h1>
    </NavOptionWrapper>
  )
}

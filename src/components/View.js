import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../AppContext'

import Home from './ViewComponents/Home'
import Resources from './ViewComponents/Resources'
import About from './ViewComponents/About'

import { getColor } from '../utils/getColor'

const ViewWrapper = styled.div`
  background-color: ${getColor('primary')};
`

export default function View() {
  
  //Brings in context from AppContext; AppContext is our global state shared between components

  const { view } = useContext(AppContext); 

  //view.value will determine which view is rendered
  if(view.value === "Home"){
    return (
        <Home />
    )
  }else if(view.value === "About"){
    return(
      <ViewWrapper>
        <About />
      </ViewWrapper>
    )
  }else if(view.value === "Resources"){
    return(
      <ViewWrapper>
        <Resources />
      </ViewWrapper>
    )
  }
}

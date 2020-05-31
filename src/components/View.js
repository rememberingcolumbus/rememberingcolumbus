import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../AppContext'

import Home from './ViewComponents/Home'
import ResourcesContextProvider from './ResourcesComponents/ResourcesContextProvider'
import Resources from './ViewComponents/Resources'
import About from './ViewComponents/About'
import Memorial from './ViewComponents/Memorial'
import MemorialContextProvider from './MemorialComponents/MemorialContextProvider'

import { getColor } from '../utils/getColor'

const ViewWrapper = styled.div`
  background-color: ${getColor('primary')};
  min-height: 100%;
`

const ResourcesViewWrapper = styled.div`
  background-color: ${getColor('primary')};
  min-height: 100%;
  max-height: 100vh;
  overflow-y: scroll;
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
      <ResourcesViewWrapper>
        <ResourcesContextProvider>
          <Resources />
        </ResourcesContextProvider>
      </ResourcesViewWrapper>
    )
  }else if(view.value === "Memorial"){
    return(
      <ViewWrapper>
        <MemorialContextProvider>
          <Memorial />
        </MemorialContextProvider>
      </ViewWrapper>
    )
  }
}

import React from 'react'
import styled from 'styled-components'

import Home from './ViewComponents/Home'
import ResourcesContextProvider from './ResourcesComponents/ResourcesContextProvider'
import Resources from './ViewComponents/Resources'
import About from './ViewComponents/About'
import Memorial from './ViewComponents/Memorial'
import MemorialContextProvider from './MemorialComponents/MemorialContextProvider'

import { getColor } from '../utils/getColor'

import { Switch, Route } from 'react-router-dom'

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
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <ViewWrapper>
          <About />
        </ViewWrapper>
      </Route>
      <Route exact path="/resources">
        <ResourcesViewWrapper>
          <ResourcesContextProvider>
            <Resources />
          </ResourcesContextProvider>
        </ResourcesViewWrapper>
      </Route>
      <Route exact path="/memorial">
        <ViewWrapper>
          <MemorialContextProvider>
            <Memorial />
          </MemorialContextProvider>
        </ViewWrapper>
      </Route>
    </Switch>
  )
}

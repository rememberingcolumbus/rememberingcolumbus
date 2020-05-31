import React, { useState } from 'react'
import AppContext from './AppContext'

export default function AppContextProvider(props) {
  
  const [navSelect, setNavSelect] = useState("Memorial");
  const [navOptions] = useState(
    [
      { text: 'Home', path: '/' },
      { text: 'About', path: '/about' },
      { text: 'Resources', path: '/resources' },
      { text: 'Memorial', path: '/memorial' }
    ]
  )

  return (
    <AppContext.Provider value={
        {
          view : {value: navSelect, controller: setNavSelect}, //view.controller allows for updating view.value
          nav : {options : navOptions} //nav.options provides an array of strings to map over for rendering nav menus
        }
      }>
      {props.children}
    </AppContext.Provider>
  )
}

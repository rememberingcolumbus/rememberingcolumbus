import React, { useState } from 'react'
import AppContext from './AppContext'

export default function AppContextProvider(props) {
  
  const [navSelect, setNavSelect] = useState("Home");
  const [navOptions] = useState(["Home","About","Resources","Memorial"])

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

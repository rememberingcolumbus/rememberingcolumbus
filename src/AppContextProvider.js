import React, { useState } from 'react'
import AppContext from './AppContext'

export default function AppContextProvider(props) {
  
  const [navSelect, setNavSelect] = useState('Home');

  return (
    <AppContext.Provider value={
        {
          view : {value: navSelect, controller: setNavSelect}
        }
      }>
      {props.children}
    </AppContext.Provider>
  )
}

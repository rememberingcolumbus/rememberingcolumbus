import React, { useState, useEffect } from 'react'
import MemorialContext from './MemorialContext';

import { getMemorialData } from '../../utils/getMemorialData'

export default function AppContextProvider(props) {
  
  const [memorialData, setMemorialData] = useState(undefined);
  //Used to determine which info from memorialData array to display
  const [memorialTarget, setMemorialTarget] = useState(1); 

  useEffect(() => {
    console.log('Getting memorial data...');
    setMemorialData(getMemorialData()); //returns mock data from getMemorialData function
  },[])

  return (
    <MemorialContext.Provider value={{
      data : {value: memorialData, controller: setMemorialTarget},
      nav : {target : memorialTarget, controller: setMemorialTarget}
    }
    }>
      
      {props.children}
    </MemorialContext.Provider>
  )
}

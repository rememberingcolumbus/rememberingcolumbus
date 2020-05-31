import React, { useContext } from 'react'
import styled from 'styled-components'


import MemorialContext from '../MemorialComponents/MemorialContext'
import SkyArea from '../MemorialComponents/SkyArea';

import SkylineOutline from '../MemorialComponents/skyline.png'

const MemorialWrapper = styled.div`
background-color: black;
  background-image: url(${SkylineOutline});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  min-height: 100vh;
`
export default function Memorial() {
  
  const memorialData = useContext(MemorialContext);
  
  console.log(memorialData);
  return (
    <MemorialWrapper>
      <SkyArea />
    </MemorialWrapper>
  )
}


/* MEMORIAL COMPONENT SHOULD

    [ √ ] Import memorialData from MemorialDataContextProvider
    [   ] Display cards with memorialized person's data (MemorialCards component)
    [   ] Display Columbus Skyline (Skyline Component)
    [   ] Allow user to scroll through the cards
    [   ] Animate transition between cards
    [   ] Animate stars being added to night sky between each card
*/
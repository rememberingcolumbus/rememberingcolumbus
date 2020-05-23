import React from 'react'
import styled from 'styled-components'

import { getColor } from '../../utils/getColor'
import { getScreens } from '../../utils/getScreens'
import Candles from './candles.png'

const HomeWrapper = styled.div`
  padding: 10px;

  @media (max-width : ${getScreens('mobile')}){
    display: flex;
    flex-direction: column;
  }
`
const TogetherTextGroup = styled.div`
  color: ${getColor('accent')};
  position: relative;
  top: -100px;

  @media (max-width : ${getScreens('mobile')}){
    top: -50px;
  }
`
const SpiritText = styled.p`
  color: ${getColor('accent_white')};
  position: relative;
  top: -120px;
  left: 85px;

  @media (max-width : ${getScreens('mobile')}){
    position: relative;
    top: -100px;
    left: 0px;
  }
`
const UnitedTextGroup = styled.div`
  color: ${getColor('accent')};
  position: relative;
  top: -200px;
  left: 30%;

  @media (max-width : ${getScreens('mobile')}){
    top: -150px;
    left: 15%;
  }
`
const GriefText = styled.p`
  color: ${getColor('accent_white')};
  position: relative;
  top: -100px;
  left: 85px;

  @media (max-width : ${getScreens('mobile')}){
    left: 0px;
  }
`
export default function Home() {
  return (
    <HomeWrapper>
      <TogetherTextGroup>
        <p className="banner_text marquee">Together</p>
        <SpiritText className="banner_text">in spirit.</SpiritText>
        <UnitedTextGroup>
          <p className="banner_text marquee">United</p>
          <GriefText className="banner_text">by grief.</GriefText>
        </UnitedTextGroup>
      </TogetherTextGroup>
    </HomeWrapper>
  )
}

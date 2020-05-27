import React from 'react'
import styled from 'styled-components'

import Candles from './candles.png'

import { getColor } from '../../utils/getColor'
import { getScreens } from '../../utils/getScreens'

const HomeWrapper = styled.div`
  padding: 10px;
  background-color: ${getColor('primary')};
  display: flex;
  flex-direction: column;
  height: 100%;
`
const TogetherText = styled.p`
  color: ${getColor('accent')};
`
const SpiritText = styled.p`
  color: ${getColor('accent_white')};
  margin-left: 10%;

  @media (max-width: ${getScreens('tablet')}){
    margin-left: 10%;
  }
`

const UnitedText = styled.p`
  color: ${getColor('accent')};
  margin-left: 40%;

  @media (max-width: ${getScreens('mobile')}){
    margin-left: 0%;
  }
`

const GriefText = styled.p`
  color: ${getColor('accent_white')};
  margin-left: 50%;

  @media (max-width: ${getScreens('mobile')}){
    margin-left: 10%;
  }
`

const CandleImage = styled.div`
  height: 100%;
  background-image: url(${Candles});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
`

export default function Home() {
  return (
    <HomeWrapper>
      <TogetherText className="banner_text marquee">Together</TogetherText>
      <SpiritText className="banner_text">in spirit.</SpiritText>
      <UnitedText className="banner_text marquee">United</UnitedText>
      <GriefText className="banner_text">by grief.</GriefText>
      <CandleImage />
    </HomeWrapper>
  )

}


import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import HomeQuote from '../components/HomeComponents/HomeQuote';
import styled from 'styled-components';

import { getColor } from '../utils/getColor';
import { getScreens } from '../utils/getScreens';

const HomeWrapper = styled.div`
  padding: 10px;
  background-color: ${getColor('accent_grey')};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
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

const CandleImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const QuoteWrapper = styled.div`
  max-width: 50%;
  margin-top: 5rem;
  @media (max-width: ${getScreens('tablet')}) {
    margin-top: 24rem;
    max-width: 100%;
  }

  @media (max-width: ${getScreens('mobile')}) {
    margin-top: 24rem;
    max-width: 100%;
  }
`

const CandleImageWrapper = styled.div`
  max-width: 31%;
  text-align: right;
  position: relative;
  @media (max-width: ${getScreens('tablet')}){
    position: absolute;
    top: 0;
    right: 0;
    max-width: 20rem;
  }
`

const QuoteImageWrapper = styled.div`
  display: flex;
  align-items: bottom;
  justify-content: space-between;
  margin: 1rem 2rem;
  height: 100%;
  position: relative;
`

export default function Home() {
  const pageTitle = 'Home';

  return (
    <Layout pageTitle={pageTitle}>
      <HomeWrapper>
        <TogetherText className="banner_text marquee">Together</TogetherText>
        <SpiritText className="banner_text">in spirit.</SpiritText>
        <UnitedText className="banner_text marquee">United</UnitedText>
        <GriefText className="banner_text">by grief.</GriefText>
        <QuoteImageWrapper>
          <QuoteWrapper>
            <HomeQuote></HomeQuote>
          </QuoteWrapper>
          <CandleImageWrapper>
            <CandleImage src="images/candles.png"/>
          </CandleImageWrapper>
        </QuoteImageWrapper>
      </HomeWrapper>
    </Layout>
  )

}

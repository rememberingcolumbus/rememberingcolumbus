import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ReactPlayer from 'react-player'

import { getScreens } from '../utils/getScreens'

const FuneralAssistanceWrapper = styled.div`
  height: 100vh;
  overflow: scroll;
`
const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const CardGrid = styled.div`
  /* background-color :  lightpink; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
  'col1 col2';

  @media (max-width : ${getScreens('tablet')}){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Col1Wrapper = styled.div`
  /* background-color :  lightpink; */
  grid-area: col1;
`

const Col2Wrapper = styled.div`
  /* background-color : lightgreen; */
`
export default function Resources({ homesList }) {
  const pageTitle = 'Funeral Assistance';
  
  return (
    <Layout pageTitle={pageTitle}>
      <FuneralAssistanceWrapper>
        <p className="banner_text">Funeral Assistance</p>
        <hr />
        <p className="page_heading" style={{textAlign: 'center'}}>Planning a funeral or memorial during COVID-19</p>
        <MainTextWrapper>
          <p className="info_text">Planning a funeral while dealing with the trauma of losing someone already feels overwhelming. The COVID-19 pandemic brings even more concerns that we’re all still learning how to deal with. The pandemic can mean that we’ve lost the opportunity to say goodbye while our loved ones were alive, making the funeral service even more meaningful.</p>
          <p className='info_text'>We’re an independent community resource dedicated to helping people whose loved ones have died during the pandemic. We pulled together quick advice from trusted experts to help guide you through this process, from choosing and working with a funeral home, to planning a service, to ensuring safety in a pandemic.</p>
        </MainTextWrapper>
        <p className="page_heading" style={{fontSize: '1.5em', lineHeight: 2, textAlign: 'center'}}>Here are some resources to help you plan a memorial that's meaningful and safe.</p>
        <CardGrid>
          <Col1Wrapper>
          <div className='card' >
            <p className='card_heading'>Read how COVID-19 has changed funerals:</p>
            <LinkWrapper>
              <a className='card_link' href="https://www.webmd.com/lung/news/20200420/covid-19-changes-funerals-and-how-families-grieve" target="_blank" rel="noopener noreferrer">COVID-19 Changes Funerals and How Families Grieve</a>
            </LinkWrapper>
          </div>
          <div className='card'>
            <p className='card_heading'>Listen to a podcast about how one man memorialized his wife during quarantine:</p>
            <LinkWrapper>
              <a className='card_link' href="https://www.nytimes.com/2020/04/24/podcasts/the-daily/coronavirus-deaths-grief.html" target="_blank" rel="noopener noreferrer">A New Way to Mourn</a>
            </LinkWrapper>
          </div>
          <div className='card'>
            <p className='card_heading'>Funeral Planning Advice {`&`} Resources</p>
          </div>
        </Col1Wrapper>
        <Col2Wrapper>
          <div className='card'>
            <p className="card_heading">An infectious disease specialist answers your questions about COVID-19, including whether its safe to attend a funeral:</p>
            <ReactPlayer style={{margin: '0 auto', maxWidth: '100%'}} url="https://www.youtube.com/watch?v=h2Yql9kMfT0" />
            </div>
        </Col2Wrapper>
      </CardGrid>
      </FuneralAssistanceWrapper>
    </Layout>
  )
}


import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ReactPlayer from 'react-player'

import { getScreens } from '../utils/getScreens'

const FuneralAssistanceWrapper = styled.div`
  padding: 10px;
`
const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const CardGrid = styled.div`
  /* background-color :  lightpink; */
  display: grid;
  grid-gap: 5px;
  padding: 5px;
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
        <p className="banner_text">Funeral Resources</p>
        <hr />
        <h2 className="page_heading" style={{textAlign: 'center'}}>Planning a funeral or memorial during COVID-19</h2>
        <MainTextWrapper>
          <p className="info_text">Planning a funeral while dealing with the trauma of losing someone already feels overwhelming. The COVID-19 pandemic brings even more concerns that we’re all still learning how to deal with. The pandemic can mean that we’ve lost the opportunity to say goodbye while our loved ones were alive, making the funeral service even more meaningful.</p>
          <p className='info_text'>We’re an independent community resource dedicated to helping people whose loved ones have died during the pandemic. We pulled together quick advice from trusted experts to help guide you through this process, from choosing and working with a funeral home, to planning a service, to ensuring safety in a pandemic.</p>
        </MainTextWrapper>
        <h3 className="page_heading" style={{fontSize: '1.5em', lineHeight: 2, textAlign: 'center'}}>Here are some resources to help you plan a memorial that's meaningful and safe.</h3>
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
            <LinkWrapper>
              <a className='card_link' href="https://www.cnet.com/health/how-to-plan-a-remote-funeral-or-memorial-and-grieve-during-the-coronavirus-pandemic/" target="_blank" rel="noopener noreferrer"> CNET: How To Plan a Remote Funeral and Grieve A Loved One During the CoronaVirus Pandemic</a>
              <a className='card_link' href="https://www.cnn.com/2020/04/16/health/virtual-funerals-coronavirus-wellness/index.html" target="_blank" rel="noopener noreferrer"> CNN: Funerals Go Virtual in the Pandemic. Here's How to Plan One with Meaning and Honor the Dead</a>
              <a className='card_link' href="https://www.youtube.com/watch?v=PwM1jr0U808" target="_blank" rel="noopener noreferrer"> CBS Chicago: Conducting a Virtual Funeral in the Coronavirus Pandemic</a>
            </LinkWrapper>
          </div>
          <div className='card'>
            <p className='card_heading'>Choosing a Funeral Home</p>
            <MainTextWrapper>
              <p className='info_text' style={{color:'black', fontSize: '1em'}}><i>Explore funeral providers before deciding who to trust with your service. Costs can vary quite a bit depending on which provider you choose, so talking to more than one can help you find the provider that best fits your needs. A good provider will take the time to answer all of your questions and understand what’s important to you.</i></p>
            <LinkWrapper>
              <a className='card_link' href="https://www.legacy.com/funeral-homes/directory/?affiliateId=1428" target="_blank" rel="noopener noreferrer">Complete List of Funeral Homes Near You</a>
            </LinkWrapper>
            </MainTextWrapper>
          </div>
        </Col1Wrapper>
        <Col2Wrapper>
          <div className='card'>
            <p className="card_heading">An infectious disease specialist answers your questions about COVID-19, including whether its safe to attend a funeral:</p>
            <ReactPlayer style={{margin: '0 auto', maxWidth: '100%'}} url="https://www.youtube.com/watch?v=h2Yql9kMfT0" />
          </div>
          <div className='card'>
            <p className="card_heading">Curious about livestream or video services? Watch a recorded example:</p>
            <iframe style={{margin: '0 auto', maxWidth: '100%'}} title="glenn_memorial" scrolling="no" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen allow="autoplay; fullscreen" src="https://w3.cdn.anvato.net/player/prod/v3/anvload.html?key=eyJtIjoiTElOIiwidiI6IjU1NzE4NjYiLCJhbnZhY2siOiJhbnZhdG9fbWNwX2xpbl93ZWJfcHJvZF80YzM2ZmJmZDRkOGQ4ZWNhZTY0ODg2NTZlMjFhYzZkMWFjOTcyNzQ5Iiwic2hhcmVMaW5rIjoiaHR0cHM6Ly93d3cubmJjNGkuY29tL25ld3MvbG9jYWwtbmV3cy92aXJ0dWFsLW1lbW9yaWFsLXNlcnZpY2UtcGxhbm5lZC1mb3ItYW5uaWUtZ2xlbm4vIiwicGx1Z2lucyI6eyJjb21zY29yZSI6eyJjbGllbnRJZCI6IjYwMzY0MzkiLCJjMyI6Im5iYzRpLmNvbSIsInNjcmlwdCI6Ii8vdzMuY2RuLmFudmF0by5uZXQvcGxheWVyL3Byb2QvdjMvcGx1Z2lucy9jb21zY29yZS9jb21zY29yZXBsdWdpbi5taW4uanMiLCJ1c2VEZXJpdmVkTWV0YWRhdGEiOnRydWUsIm1hcHBpbmciOnsidmlkZW8iOnsiYzMiOiJuYmM0aS5jb20iLCJuc19zdF9zdCI6IndjbWgiLCJuc19zdF9wdSI6Ik5leHN0YXIiLCJuc19zdF9nZSI6Ik5ld3MsTG9jYWwgTmV3cyJ9LCJhZCI6eyJjMyI6Im5iYzRpLmNvbSIsIm5zX3N0X3N0Ijoid2NtaCIsIm5zX3N0X3B1IjoiTmV4c3RhciIsIm5zX3N0X2dlIjoiTmV3cyxMb2NhbCBOZXdzIn19fSwiZGZwIjp7ImNsaWVudFNpZGUiOnsiYWRUYWdVcmwiOiJodHRwczovL3B1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC9nYW1wYWQvYWRzP3N6PTF4MTAwMCZpdT0vNTY3OC9tZy53Y21oL25ld3MvbG9jYWxfbmV3cyZpbXBsPXMmZ2RmcF9yZXE9MSZlbnY9dnAmb3V0cHV0PXZtYXAmdW52aWV3ZWRfcG9zaXRpb25fc3RhcnQ9MSZ2aWQ9c2hvcnRfb25lY3VlJmNtc2lkPTEyMzQmdXJsPWh0dHBzOi8vd3d3Lm5iYzRpLmNvbS9uZXdzL2xvY2FsLW5ld3MvdmlydHVhbC1tZW1vcmlhbC1zZXJ2aWNlLXBsYW5uZWQtZm9yLWFubmllLWdsZW5uLyZjaXVfc3pzPTcyOHg5MCwzMDB4MjUwJmFkX3J1bGU9MSZkZXNjcmlwdGlvbl91cmw9aHR0cHM6Ly93d3cubmJjNGkuY29tL25ld3MvbG9jYWwtbmV3cy92aXJ0dWFsLW1lbW9yaWFsLXNlcnZpY2UtcGxhbm5lZC1mb3ItYW5uaWUtZ2xlbm4vJmN1c3RfcGFyYW1zPXZpZCUzRDU1NzE4NjYlMjZjbXNpZCUzRDQyMTgwOCUyNnBpZCUzRDQyMTgwOCUyNnZpZGNhdCUzRCUyRm5ld3MlMkZsb2NhbF9uZXdzJTI2Ym9iX2NrJTNEJTVCYm9iX2NrX3ZhbCU1RCUyNmRlc2NyaXB0aW9uX3VybCUzRGh0dHBzJTNBJTJGJTJGd3d3Lm5iYzRpLmNvbSUyRm5ld3MlMkZsb2NhbC1uZXdzJTJGdmlydHVhbC1tZW1vcmlhbC1zZXJ2aWNlLXBsYW5uZWQtZm9yLWFubmllLWdsZW5uJTJGJTI2ZF9jb2RlJTNEMjE3JTJDMjIxJTJDMTg5JTJDMTc2JTJDMjAxJTI2cGxheWVyd2lkdGglM0Q4NzYlMjZwbGF5ZXJoZWlnaHQlM0Q0OTMifSwibGlicmFyeVJlcXVlc3RlZCI6dHJ1ZX0sImdvb2dsZUFuYWx5dGljcyI6eyJ0cmFja2luZ0lkIjoiVUEtNjAwODg5NTItNSIsImV2ZW50cyI6eyJBRF9TVEFSVEVEIjp7ImFsaWFzIjoiVmlkZW8tQWQiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVklERU9fU1RBUlRFRCI6eyJhbGlhcyI6IlZpZGVvLVBsYXkiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVklERU9fRklSU1RfUVVBUlRJTEUiOnsiYWxpYXMiOiJWaWRlby0yNSUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVklERU9fTUlEX1BPSU5UIjp7ImFsaWFzIjoiVmlkZW8tNTAlIiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlZJREVPX1RISVJEX1FVQVJUSUxFIjp7ImFsaWFzIjoiVmlkZW8tNzUlIiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlZJREVPX0NPTVBMRVRFRCI6eyJhbGlhcyI6IlZpZGVvLTEwMCUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVVNFUl9QQVVTRSI6eyJhbGlhcyI6IlBhdXNlIiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlVTRVJfUkVTVU1FIjp7ImFsaWFzIjoiUmVzdW1lIiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn19fSwicmVhbFRpbWVBbmFseXRpY3MiOnRydWUsImhlYWx0aEFuYWx5dGljcyI6e319LCJodG1sNSI6dHJ1ZX0%3D"  width ="640" height="360"></iframe>
          </div>
        </Col2Wrapper>
      </CardGrid>
      </FuneralAssistanceWrapper>
    </Layout>
  )
}


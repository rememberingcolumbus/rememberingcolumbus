import React from 'react'
import styled from 'styled-components'

import { getScreens } from '../utils/getScreens'

import Layout from '../components/Layout'
import ReactPlayer from 'react-player'

const EmotionalHealthWrapper = styled.div`
  padding: 10px;
`

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BreakCardsGroup = styled.div`
  max-width: 90vw;
  display: flex;
  justify-content: center;
  margin-left: 5%;

  @media (max-width: ${getScreens('mobile')}){
    flex-direction: column;
  }
`

const CardImageWrapper = styled.div`
  min-height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #707070;

  @media (max-width: ${getScreens('mobile')}){
    display: none;
  }
`

const FlexCard = styled.div`
  width: 30%;
  flex: 1;

  @media (max-width: ${getScreens('mobile')}){
    max-height: 20vh;
    width: 100%;
  }
`


const DisclaimerWrapper = styled.div`
  text-align: center;
  margin: 5%;
`

const StoryCardsGroup = styled.div`
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  padding: 10px;
`

const StoryCard = styled.div`
  width: 100%;
  min-height: 25%;
  text-align: left;
`
const StoryCardImageWrapper = styled.div`
  background-color: #707070;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function emotionalhealth(){

  const pageTitle="Emotional Health";

  return (
    <Layout pageTitle={pageTitle}>
      <EmotionalHealthWrapper>
        <p className="banner_text">Emotional Health</p>
        <hr />
        <MainText>
          <h1 className="page_heading">
            When emotions become overwhelming...
          </h1>
          <p className="info_text">
            Grieving the loss of a loved one while coping with the fear and anxiety related to the COVID-19 pandemic can be especially overwhelming. 
          </p>
          <h1 className="page_heading">
            Managing Stress during COVID-19
          </h1>
          <p className="info_text">
            If you’re feeling stressed, overwhelmed, or anxious, you’re not alone. We’re being asked to manage the impacts of physical distancing, job loss, illness, and death, all at once. That’s more loss, upheaval, and uncertainty than most of us have ever experienced, and building our mental and emotional resilience is more important than ever.
          </p>
          <BreakCardsGroup>
            <FlexCard className="card">
              <CardImageWrapper>
                Card Image
              </CardImageWrapper>
                <a className="card_link" href="https://wexnermedical.osu.edu/blog/staying-in-touch-with-your-own-mental-health" target="_blank" rel="noopener noreferrer">Coping with COVID-19: Staying in Touch With Your Own Mental Health</a>
                <p className="message_text">Take a break and check in with your emotional needs.</p>
            </FlexCard>
            <FlexCard className="card" >
              <CardImageWrapper>
                Card Image
              </CardImageWrapper>
              <a className="card_link" href= "https://hub.jhu.edu/2020/04/06/dani-fallin-mental-health-challenges-coronavirus/" target="_blank" rel="noopener noreferrer"> Psychological and Emotional Challenges of Social Distancing</a>
              <p className="message_text">
              Read about managing and understanding mental health concerns during the COVID-19 pandemic
              </p>
            </FlexCard>
            <FlexCard className="card">
              <CardImageWrapper>
                Card Image
              </CardImageWrapper>
              < a className="card_link" href="https://coronavirus.ohio.gov/wps/portal/gov/covid-19/families-and-individuals/coping-with-covid-19-anxiety/"t arget="_blank" rel="noopener noreferrer"> Coping with COVID-19 Anxiety</a> 
              <p className="message_text">Find more resources to help you deal with the stress and mental toll of the COVID-19 outbreak.</p>
            </FlexCard>
          </BreakCardsGroup>
          <h1 className="page_heading" style={{fontSize: '1.5rem'}}>
            When you lost someone during COVID-19
          </h1>
          <p className="info_text">
            No matter the cause, losing someone hurts. And, many of the options we used to have to say goodbye, or comfort each other, are no longer available to us, causing us even more anxiety and sadness. 
          </p>
          <p className="info_text">
            Grief is a natural response to loss. Grief lasts, beyond any memorial or service. While there’s no moving on, you can move forward. That’s why we’re providing one place with grief and coping resources as you deal with the loss of a loved one. 
          </p>
          <h1 className="page_heading" style={{fontSize: '1.5rem'}}>
            Read about how the Coronavirus is changing the way we experience death:
          </h1>
          <StoryCardsGroup>
              <StoryCard className="card">
                <StoryCardImageWrapper>
                  Card Image
                </StoryCardImageWrapper>
                <a className="card_link" style={{textAlign: 'left'}} href="https://www.apa.org/topics/covid-19/grief-distance" target="_blank" rel="noopener noreferrer"> Saying Goodbye in the Age of Physical Distancing</a>
              </StoryCard>
            </StoryCardsGroup>
          <h1 className="page_heading">
              Self-Care methods that can provide some relief:
          </h1>
            <StoryCardsGroup>
              <StoryCard className="card">
                <ReactPlayer style={{margin: '0 auto', maxWidth: '100%'}} url="https://www.youtube.com/watch?v=gsYL4PC0hyk" />
                <p className="card_heading" style={{textAlign: 'left'}}>
                  The Grieving Process: Coping with Death
                </p>
                <p className="message_text">
                  Watch a video on how to deal with pain you’re feeling, and work through the stages of grieving in a way that works for you.
                </p>
              </StoryCard>
              <StoryCard className="card">
                <StoryCardImageWrapper>
                  Card Image
                </StoryCardImageWrapper>
                <a className="card_link" style={{textAlign: 'left'}} href="https://www.headspace.com/blog/2018/03/14/grief-and-meditation/" target="_blank" rel="noopener noreferrer">Finding Solace in Meditation</a>
                <p className="message_text" style={{marginLeft: "0"}}>
                  Read an essay on the experiences of sitting with grief.
                </p>
              </StoryCard>
              <StoryCard className="card">
                <StoryCardImageWrapper>
                  Card Image
                </StoryCardImageWrapper>
                <a className="card_link" style={{textAlign: 'left'}} href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/stress-coping/grief-loss.html" target="_blank" rel="noopener noreferrer">Grief and Loss</a>
                <p className="message_text" style={{marginLeft: "0"}}>
                  If you've lost a loved one, are in distress from loss or change, or need to help children cope with grief, find coping advice here. 
                </p>
              </StoryCard>
                <StoryCard className="card">
                <StoryCardImageWrapper>
                  Card Image
                </StoryCardImageWrapper>
                <a className="card_link" style={{textAlign: 'left'}} href="https://www.vitas.com/family-and-caregiver-support/grief-and-bereavement/grief-support/phone-in-grief-support-groups/" target="_blank" rel="noopener noreferrer">Family and Caregiver Support Groupd</a>
                <p className="message_text" style={{marginLeft: "0"}}>
                  Join a free grieving support group. 
                </p>
              </StoryCard>
          </StoryCardsGroup>
        </MainText>
        <DisclaimerWrapper>
          <p>
            The information contained in this article is for educational and informational purposes only and is not intended as health or medical advice. Always consult a physician or other qualified health provider regarding any questions you may have about a medical condition or health objectives.
          </p>
        </DisclaimerWrapper>
      </EmotionalHealthWrapper>
    </Layout>
  )
}

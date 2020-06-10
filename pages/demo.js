import React, { useState } from 'react'
import styled from 'styled-components'

import SkyArea from '../components/MemorialComponents/SkyArea';
import CardArea from '../components/MemorialComponents/CardArea'

import { getMemorialPeople } from '../lib/memorial_people.js'
import { getScreens } from '../utils/getScreens'
import Layout from '../components/Layout';
import Head from 'next/head'

const MemorialWrapper = styled.div`
  background-color: black;
  background-image: url('images/skyline.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  min-height: 100vh;
  position: relative;
  overflow-y: hidden;

  @media (max-width: ${getScreens('tablet')}){
    background-position: center;
  }
`

const CardAreaWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`
export default function Memorial({ data }) {
  
  const pageTitle = 'Stars Over Columbus';

  const [targetCard, setTargetCard] = useState(0)

  return (

    <Layout pageTitle={pageTitle}>
        <MemorialWrapper>
          <SkyArea targetCard={targetCard}/>
          <CardAreaWrapper>
            <CardArea data={data} targetCard={targetCard} advanceCard={setTargetCard}/>
          </CardAreaWrapper>
        </MemorialWrapper>
    </Layout>

  )
}

export async function getStaticProps(){
  return {
    props: {
      data : getMemorialPeople()
    },
  }
}

/* MEMORIAL COMPONENT SHOULD

    [ √ ] Import memorialData from MemorialDataContextProvider
    [   ] Display cards with memorialized person's data (MemorialCards component)
    [   ] Display Columbus Skyline (Skyline Component)
    [   ] Allow user to scroll through the cards
    [   ] Animate transition between cards
    [   ] Animate stars being added to night sky between each card
*/
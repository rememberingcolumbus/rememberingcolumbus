import styled from 'styled-components'
import HomeListing from '../components/ResourcesComponents/HomeListing';
import Layout from '../components/Layout';
import Head from 'next/head'
import { getFuneralHomes } from '../lib/funeral_homes.js';

import { getScreens } from '../utils/getScreens'

import { getColor } from '../utils/getColor'

const ResourcesWrapper = styled.div`
  padding: 10px;
`
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: ${getScreens('mobile')}){
    flex-direction: column;
  }
`

const ResourcesViewWrapper = styled.div`
  background-color: ${getColor('primary')};
  min-height: 100%;
  max-height: 100vh;
  overflow-y: scroll;
`

export default function Resources({ homesList }) {
  const pageTitle = 'Resources';
  
  return (
    <Layout pageTitle={pageTitle}>
      <ResourcesViewWrapper>
        <ResourcesWrapper>
          <p className="banner_text">Resources</p>
          <hr />
          <p className="info_text">Here you can find a list of local funeral homes. Click their name to visit the homes website. </p>
          <CardsWrapper>
            {homesList.map((home,index) => {
                if(index !== (homesList.length) - 1){
                  return <HomeListing key={`HomeCard${index}`} info={home} isLast={false} />
                }else{
                  return <HomeListing key={`HomeCard${index}`} info={home} isLast={true} />
                }
              }
          )}
          </CardsWrapper>
        </ResourcesWrapper>
      </ResourcesViewWrapper>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      homesList: getFuneralHomes()
    },
  }
}
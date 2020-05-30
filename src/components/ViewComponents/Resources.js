import React, { useContext } from 'react'
import styled from 'styled-components'
import ResourcesContext from '../ResourcesComponents/ResourcesContext'
import HomeListing from '../ResourcesComponents/HomeListing';

import { getScreens } from '../../utils/getScreens'

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

export default function Resources() {

  const {homesList} = useContext(ResourcesContext);

  return (
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
  )
}

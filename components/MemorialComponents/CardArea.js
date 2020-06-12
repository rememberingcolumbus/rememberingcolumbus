import React from 'react'
import styled from 'styled-components'

import { getColor } from '../../utils/getColor'

const CardAreaWrapper = styled.div`
  text-align: center;
  background-color: white;
  border: solid thin black;
  padding: 10px;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 5px;
`

const InfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const InfoChar = styled.p`
  color: black;
`

const AdvanceButton = styled.button`
  border: solid thin black;
  padding: 5px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${getColor('accent_white')};

  &:hover{
    background-color: ${getColor('primary')};
  }
`

export default function CardArea(props) {
  
  let {data,targetCard,advanceCard} = props;

  function handleClick(){
    if(targetCard === data.length){
      advanceCard(0)
    }else{
      advanceCard(targetCard++)
    }
  }

  const person = data[targetCard];

  return (
    <CardAreaWrapper>
      <h1>In loving memory of {person.firstName} {person.lastName}</h1>
      <InfoGroup>
        <InfoChar>{person.dateOfBirth} {person.placeOfBirth}</InfoChar>
        <InfoChar> -- </InfoChar>
        <InfoChar>{person.dateOfDeath} {person.placeOfDeath}</InfoChar>
      </InfoGroup>
      <p className="message_text">{person.message}</p>
      <AdvanceButton onClick={handleClick}>Add {person.firstName}'s Star</AdvanceButton>
    </CardAreaWrapper>
  )
}


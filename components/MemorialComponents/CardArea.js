import React from 'react'
import styled from 'styled-components'

const CardAreaWrapper = styled.div`
  text-align: center;
  background-color: white;
  border: solid thin black;
  padding: 10px;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 10px;
`

const InfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const InfoChar = styled.p`
  color: black;
`

export default function CardArea(props) {
  
  const {data,targetCard} = props;

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
    </CardAreaWrapper>
  )
}


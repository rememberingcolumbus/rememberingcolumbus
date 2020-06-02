import styled from 'styled-components'

const HomeListingWrapper = styled.div`
 padding: 10px;
`

const PhoneGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function HomeListing({info, isLast}) {
  
  const {name, phone, link} = info;
  const nameLetterCount  = name.length;
  console.log(nameLetterCount);
  if(isLast === true){
    return(
      <HomeListingWrapper className="card last_card" >
        <h1><a className="card_link" target="_blank" rel="noopener noreferrer" href={link}>{name}</a></h1>
        <PhoneGroup>
          <i className="fas fa-phone-square-alt fa-2x" /> {phone}
        </PhoneGroup>
      </HomeListingWrapper>
    )
  }else{
    return (
      <HomeListingWrapper className="card">
        <h1><a className="card_link" target="_blank" rel="noopener noreferrer" href={link}>{name}</a></h1>
        <PhoneGroup>
          <i className="fas fa-phone-square-alt fa-2x" /> {phone}
        </PhoneGroup>
      </HomeListingWrapper>
    )
  }
}

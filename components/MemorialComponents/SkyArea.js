import styled from 'styled-components'

const SkyAreaWrapper = styled.div`
  padding-bottom: 24.5%;
`

const ComingSoonMessage = styled.div`
  color: #FFFFFF;
  width: 34rem;
  height: 6rem;
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
export default function SkyArea() {
  return (
    <SkyAreaWrapper>
      <ComingSoonMessage>
        <h1>Memorial coming soon!</h1>
      </ComingSoonMessage>
    </SkyAreaWrapper>
  )
}

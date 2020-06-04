import styled from 'styled-components'


import SkyArea from '../components/MemorialComponents/SkyArea';
import Layout from '../components/Layout';
import Head from 'next/head'

const MemorialWrapper = styled.div`
background-color: black;
  background-image: url('images/skyline.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  min-height: 100vh;
`
export default function Memorial() {
  const pageTitle = 'About';

  return (

    <Layout pageTitle={pageTitle}>
      <MemorialWrapper>
        <SkyArea />
      </MemorialWrapper>
    </Layout>

  )
}


/* MEMORIAL COMPONENT SHOULD

    [ √ ] Import memorialData from MemorialDataContextProvider
    [   ] Display cards with memorialized person's data (MemorialCards component)
    [   ] Display Columbus Skyline (Skyline Component)
    [   ] Allow user to scroll through the cards
    [   ] Animate transition between cards
    [   ] Animate stars being added to night sky between each card
*/
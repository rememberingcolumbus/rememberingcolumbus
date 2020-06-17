/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { getColor } from '../utils/getColor'

import Layout from '../components/Layout'

const MemorialWrapper = styled.div`
  padding: 10px;
`

const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Cta(){

  const pageTitle='Memorials'

  return(
    <Layout pageTitle={pageTitle}>
      <MemorialWrapper>
        <p className="banner_text">Virtual Memorials</p>
        <hr />
        <MainTextWrapper>
          <p className="page_heading">What is a Virtual Memorial?</p>
          <p className="info_text">Part of the CBUS Remembers mission is to provide a place for community members to come together and remember those we have lost during the Covid-19 pandemic.</p>
          <p className="info_text">In service of that goal, we are curating a list of those who have passed during the pandemic. Friends, family, and community members are invited to submit information about their loved ones and that information will be preserved in our online <strong>Memories Vault</strong>.</p>
          <p className="info_text">The contents of that vault will be made available to select artists and creators. We will invite those makers to create unique tributes to those we have lost.</p>
          <p className="info_text">To view the first virtual memorial, please visit <Link href="/demo" passHref="true"><a>Stars Over Columbus</a></Link>, created with love by the CBUS Remembers team.</p>
          <p style={{margin: "0 auto", padding: '10px', maxWidth: '50%', color: `${getColor('accent')}`, textAlign: 'center'}}><i><strong>We will open the Memories Vault for community submissions on 6/22/2020. Please return then to add your loved one to the memorials.</strong></i></p>
        </MainTextWrapper>
      </MemorialWrapper>
    </Layout>
  )  
}

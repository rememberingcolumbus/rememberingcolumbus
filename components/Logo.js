import React from 'react'
import styled from 'styled-components'

const LogoImg = styled.div`
  min-height: 10vh;
  background-image: url("/Logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export default function Logo() {
  return (
    <LogoImg />
  )
}

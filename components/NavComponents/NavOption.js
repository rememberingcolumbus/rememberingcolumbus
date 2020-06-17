/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import Link from "next/link";

import { getColor } from '../../utils/getColor'
import { getScreens } from '../../utils/getScreens'

const NavOptionWrapper = styled.div`
  @media (max-width : ${getScreens('tablet')}){
    font-size: .75rem;
    margin: 2px;
  }

  a:hover{
    color: ${getColor('primary')};
    text-decoration: underline;
    cursor: pointer;
  }

  a {
    color: #000000;
  }
`
export default ({text, path}) => <NavOptionWrapper><Link href={path}><a><h1>{text}</h1></a></Link></NavOptionWrapper>;

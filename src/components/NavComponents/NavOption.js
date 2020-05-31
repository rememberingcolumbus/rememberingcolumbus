import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import { getColor } from '../../utils/getColor'
import { getScreens } from '../../utils/getScreens'

const NavOptionWrapper = styled(Link)`
  color: #000000;

  @media (max-width : ${getScreens('mobile')}){
    font-size: .75rem;
    margin: 2px;
  }

  &:hover{
    color: ${getColor('accent')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export default ({text, path}) => <NavOptionWrapper to={path}><h1>{text}</h1></NavOptionWrapper>;
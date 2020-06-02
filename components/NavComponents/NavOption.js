import styled from 'styled-components'
import Link from "next/link";

import { getColor } from '../../utils/getColor'
import { getScreens } from '../../utils/getScreens'

const NavOptionWrapper = styled.div`
  @media (max-width : ${getScreens('mobile')}){
    font-size: .75rem;
    margin: 2px;
  }

  a:hover{
    color: ${getColor('accent')};
    text-decoration: underline;
    cursor: pointer;
  }

  a {
    color: #000000;
  }
`
export default ({text, path}) => <NavOptionWrapper><Link href={path}><a><h1>{text}</h1></a></Link></NavOptionWrapper>;

import styled from 'styled-components';
import { withRouter } from 'next/router';


import Nav from './Nav';
import Head from 'next/head';
import Logo from './Logo';
import { getScreens } from '../utils/getScreens'
import { getColor } from '../utils/getColor'

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  grid-template-areas:
  "logo view"
  "nav view";

  @media (max-width: ${getScreens('tablet')}){
    display: flex;
    flex-direction: column;
  }
`
const LogoWrapper = styled.div`
  grid-area: logo;
`
const ViewWrapper = styled.div`
  grid-area: view;
  background-color: ${getColor('primary')};
  min-height: 100%;
`
const NavWrapper = styled.div`
  grid-area: nav;
`

export const siteTitle = 'CBUS Remembers'

function Layout({ router, children, pageTitle }) {
  const title = pageTitle + ' - CBUS Remembers';
  const currentURL = `https://www.cbusremembers.com${router.pathname}`;
  return (
    <AppWrapper>
      <Head>
        <title>{title}</title>
        <meta name="description" content="CBUS Remembers is a group of volunteers and community members dedicated to helping Columbus navigate the new reality of bereavement that we all face. We are a proud member of Can't Stop Columbus, a state-wide volunteer movement to create resources for the community." />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="CBUS Remembers is a group of volunteers and community members dedicated to helping Columbus navigate the new reality of bereavement that we all face. We are a proud member of Can't Stop Columbus, a state-wide volunteer movement to create resources for the community." />
        <meta name="twitter:image" content="https://www.cbusremembers.com/Logo.png" />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentURL} />
        <meta property="og:image" content="https://www.cbusremembers.com/Logo.png" />
        <meta property="og:description" content="CBUS Remembers is a group of volunteers and community members dedicated to helping Columbus navigate the new reality of bereavement that we all face. We are a proud member of Can't Stop Columbus, a state-wide volunteer movement to create resources for the community." />
        <meta property="og:site_name" content={title} />
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <ViewWrapper>
          {children}
      </ViewWrapper>
    </AppWrapper>
  )
}

export default withRouter(Layout);
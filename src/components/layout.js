import * as React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`

const Heading = styled.h1`color: #199615;`

const Navlinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`

const NavlinkItem = styled.li`padding-right: 2rem;`
const NavLinkText = styled(props => <Link {...props} />)`
  color: black;
`;

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <title>{pageTitle}</title>
      <nav>
        <Navlinks>
          <NavlinkItem>
            <NavLinkText to="/">Home</NavLinkText>
          </NavlinkItem>
          <NavlinkItem>
            <NavLinkText to="/about">About</NavLinkText>
          </NavlinkItem>
          <NavlinkItem>
            <NavLinkText to="/blog">Blog</NavLinkText>
          </NavlinkItem>
          <NavlinkItem>
            <NavLinkText to="/challenges">Challenges</NavLinkText>
          </NavlinkItem>
        </Navlinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  )
}

export default Layout
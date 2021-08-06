import * as React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;

const Heading = styled.h1`
  color: #199615;
`;

const Navlinks = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style: none;
  padding-left: 0;
`;
const NavlinkItem = styled.li``;
const NavLinkText = styled((props) => <Link {...props} />)`
  color: black;
  padding: 3px;
  ${(props) =>
    props.selected &&
    `
      color: #199615;
      font-weight: 800;
      text-decoration: none;
    `}
`;

const Layout = ({ pageTitle, children, page }) => {
  return (
    <Container>
      <title>{pageTitle}</title>
      <nav>
        <Navlinks>
          <NavlinkItem>
            <NavLinkText selected={page === 'home'} to='/'>Home</NavLinkText>
          </NavlinkItem>
          <NavlinkItem>
            <NavLinkText selected={page === 'about'} to='/about'>
              About
            </NavLinkText>
          </NavlinkItem>
          <NavlinkItem>
            <NavLinkText selected={page === 'resume'} to='/resume'>
              Resumé
            </NavLinkText>
          </NavlinkItem>
          <NavlinkItem>
            <NavLinkText selected={page === 'blog'} to='/blog'>
              Blog
            </NavLinkText>
          </NavlinkItem>
          <NavlinkItem>
            <NavLinkText selected={page === 'portfolio'} to='/portfolio'>
              Portfolio
            </NavLinkText>
          </NavlinkItem>
          <NavlinkItem>
            <NavLinkText
              selected={page === 'challenges'}
              to='/challenges'
            >
              Challenges
            </NavLinkText>
          </NavlinkItem>
        </Navlinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  );
};

export default Layout;

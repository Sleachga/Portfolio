import * as React from 'react';
import { Link } from 'gatsby';

import CanvasContainer from './canvasContainer';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Container = styled.div`
  margin: auto;
  max-width: ${props => props.page === 'blog-post' ? '700px' : '500px'};
  font-family: sans-serif;
  height: 100%;
  border-radius: 30px;
  padding: 7px 20px 7px 20px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 5;
`;

const Heading = styled.h1`
  color: #199615;
`;

const Navlinks = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
  padding-left: 0;
`;

const NavlinkItem = styled.li`
  ${(props) =>
    props.first &&
    `margin-left: 0 !important;
      margin-right: auto;`}
  ${(props) =>
    props.last &&
    `margin-left: auto
    margin-right: 0 !important;`}
  
  margin: auto;
`;

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
    <div>
      <CanvasContainer />
      <Container page={page}>
        <title>{pageTitle}</title>
        <nav>
          <Navlinks>
            <NavlinkItem first>
              <NavLinkText selected={page === 'home'} to="/">
                Home
              </NavLinkText>
            </NavlinkItem>
            <NavlinkItem>
              <NavLinkText selected={page === 'about'} to="/about">
                About
              </NavLinkText>
            </NavlinkItem>
            <NavlinkItem>
              <NavLinkText selected={page === 'resume'} to="/resume">
                Resumé
              </NavLinkText>
            </NavlinkItem>
            <NavlinkItem>
              <NavLinkText selected={page === 'blog'} to="/blog">
                Blog
              </NavLinkText>
            </NavlinkItem>
            <NavlinkItem>
              <NavLinkText selected={page === 'challenges'} to="/challenges">
                Challenges
              </NavLinkText>
            </NavlinkItem>
            <NavlinkItem last>
              <NavLinkText selected={page === 'fish'} to="/fish">
                Feed the Fish
              </NavLinkText>
            </NavlinkItem>
          </Navlinks>
        </nav>
        <main>
          {page !== 'fish' && <Heading>{pageTitle}</Heading>}
          {children}
        </main>
      </Container>
    </div>
  );
};

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  page: PropTypes.string,
};

export default Layout;

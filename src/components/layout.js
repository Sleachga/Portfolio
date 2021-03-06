import * as React from 'react';
import { Link } from 'gatsby';

import CanvasContainer from './canvasContainer';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Container = styled.div`
  margin: auto;
  max-width: ${props => props.wide ? '700px' : '500px'};
  font-family: sans-serif;
  height: 100%;
  border-radius: 30px;
  padding: 7px 20px 7px 20px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 5;
  padding-bottom: 10px;
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

// TODO: Add a color theme picker in top right dropdown button
// Also add color themes
// Save selection in local storage

const Layout = ({ pageTitle, children, page, wide }) => {
  return (
    <div>
      <CanvasContainer />
      <Container wide={wide} page={page}>
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
            {/* <NavlinkItem>
              <NavLinkText selected={page === 'challenges'} to="/challenges">
                Challenges
              </NavLinkText>
            </NavlinkItem> */}
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
  wide: PropTypes.bool
};

export default Layout;

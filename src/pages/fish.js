import * as React from 'react';
import Layout from '../components/layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const Centered = styled.p`
  text-align: center;
`;

const Challenges = () => {
  return (
    <Layout page="fish" pageTitle="Feed the Fish">
    </Layout>
  );
};

// TODO: maybe put a box bottom left that explains this page (click)

export default Challenges;

import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import './css/fonts.css';
import './css/global.css';

import Typewriter from 'typewriter-effect';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  padding-right: 4px;
`;

const IndexPage = () => {
  return (
    <Layout page="home" pageTitle="Hey there 👋">
      <div>
        <p>I&apos;m Sanford. I&apos;m a full-stack Javascript developer.</p>
        <Container>
          <Text>Welcome to my</Text>
          <Typewriter
            options={{
              strings: [
                ' personal site',
                ' blog',
                ' portfolio',
                ' creative space',
              ],
              deleteSpeed: 20,
              autoStart: true,
              delay: 50,
              cursor: '',
              loop: true,
            }}
          />
        </Container>
      </div>
      <p>
        Click on the links above to learn
        more about me (or feed the fish)
      </p>
      <div style={{ marginBottom: '10px' }}>
        <StaticImage
          alt="Me looking good while hiking"
          src="../images/profile.jpeg"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

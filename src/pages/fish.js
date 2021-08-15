import React, { useState } from 'react';
import Layout from '../components/layout';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestionCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import 'animate.css';

const HelpButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: grey;
  }
`;

const HelpModalContainer = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;

  background: white;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  width: 300px;
  height: 280px;
`;

const HelpModalTriangle = styled.div`
  position: fixed;
  right: 35px;
  bottom: 70px;

  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid white;
`;

const CloseButton = styled.div`
  position: fixed;
  right: 30px;
  bottom: 360px;

  &:hover {
    color: grey;
  }
`;

const HelpModal = ({ helpShowing, setHelpShowing }) => {
  return (
    <HelpModalContainer>
      <h3>Help</h3>
      <div>
        <p>I created this page using HTML5 Canvas. </p>
        <p>
          Clicking drops a food pellet. The fish chase and eat the food pellets.
          They also spin in a circle sometimes when they&apos;re happy.
        </p>
        <p>
          There are bound to be some bugs with the fish movement... be patient
          with them, they&apos;re not very smart... If you find a bug let me know via <a href="mailto:sanfordleach@gmail.com">email</a>{' '}
          or{' '}
          <a
            target="_blank"
            href="https://twitter.com/SleachCodes"
            rel="noreferrer"
          >
            twitter.
          </a>
        </p>
        <p></p>
      </div>
      <CloseButton onClick={(e) => {
        e.stopPropagation();
        setHelpShowing(!helpShowing);
      }}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </CloseButton>
      <HelpModalTriangle />
    </HelpModalContainer>
  );
};

const Challenges = () => {
  const [helpShowing, setHelpShowing] = useState(false);

  return (
    <Layout page="fish" pageTitle="Feed the Fish">
      {helpShowing && (
        <HelpModal helpShowing={helpShowing} setHelpShowing={setHelpShowing} />
      )}

      <HelpButton
        onClick={(e) => {
          e.stopPropagation();
          setHelpShowing(!helpShowing);
        }}
        className="animate__animated animate__wobble"
      >
        <FontAwesomeIcon size="2x" icon={faQuestionCircle} />
      </HelpButton>
    </Layout>
  );
};

// TODO: maybe put a box bottom left that explains this page (click)

export default Challenges;

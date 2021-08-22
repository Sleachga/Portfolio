import * as React from 'react';
import Layout from '../components/layout';

import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import resume from '../resume/resume.pdf';

const DownloadIcon = styled.a`
  text-decoration: none;
  color: #199615;

  position: absolute;
  top: 60px;
  right: 40px;
  z-index: 10;

  &:hover {
    color: black;
  }
`;

const Resume = () => {
  return (
    <Layout wide page="resume" pageTitle="Resumé">
      <DownloadIcon href={resume} download>
        <FontAwesomeIcon size="2x" icon={faDownload} />
      </DownloadIcon>
      <StaticImage src="../resume/resume.png" />
    </Layout>
  );
};

export default Resume;

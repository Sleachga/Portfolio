import * as React from 'react';
import Layout from '../components/layout';

import { StaticImage } from 'gatsby-plugin-image';

const Resume = () => {
  return (
    <Layout wide page="resume" pageTitle="Resumé">
      <StaticImage src="../images/resume.png"/>
    </Layout>
  );
};

export default Resume;

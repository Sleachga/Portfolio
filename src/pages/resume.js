import * as React from 'react';
import Layout from '../components/layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

const Resume = () => {
  return (
    <Layout page="resume" pageTitle="Resumé">
      <p>
        Under construction <FontAwesomeIcon icon={faWrench} />
      </p>
    </Layout>
  );
};

export default Resume;

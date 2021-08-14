import * as React from 'react';
import Layout from '../components/layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';


const Challenges = () => {
  return (
    <Layout page='challenges' pageTitle='Coding Challenges'>
      <p>Under construction <FontAwesomeIcon icon={faWrench} /></p>
    </Layout>
  );
};

export default Challenges;
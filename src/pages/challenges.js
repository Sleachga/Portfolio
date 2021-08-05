import * as React from 'react'
import Layout from '../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'


const Challenges = () => {
  return (
    <Layout pageTitle="Coding Challenges">
      <p>In construction <FontAwesomeIcon icon={faWrench} /></p>
    </Layout>
  )
}

export default Challenges
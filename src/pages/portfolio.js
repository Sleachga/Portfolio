import * as React from 'react'
import Layout from '../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'


const Portfolio = () => {
  return (
    <Layout pageTitle="Portfolio">
      <p>In construction <FontAwesomeIcon icon={faWrench} /></p>
    </Layout>
  )
}

export default Portfolio
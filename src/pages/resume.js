import * as React from 'react'
import Layout from '../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'


const Resume = () => {
  return (
    <Layout pageTitle="Resumé">
      <p>In construction <FontAwesomeIcon icon={faWrench} /></p>
    </Layout>
  )
}

export default Resume
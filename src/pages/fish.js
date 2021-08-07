import * as React from 'react'
import Layout from '../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'

const Fish = () => {
  return (
    <Layout page='fish' pageTitle="Feed The Fish">
      <p>Go ahead... click anywhere to feed them</p>
    </Layout>
  )
}

export default Fish
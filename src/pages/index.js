import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => {
  return (
    <Layout pageTitle="Hey there 👋">
      <p>I'm Sanford.  Welcome to my blog/portfolio/personal space.</p>
      <p>Thats me hiking <FontAwesomeIcon icon={faArrowDown} /></p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/profile.jpeg"
      />
    </Layout>
  )
}

export default IndexPage
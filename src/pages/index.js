import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p>This is my second child</p>
      <StaticImage
        width={700}
        alt="Dog in Crab Costume"
        src='../images/dogCrab.jpg'
      />
    </Layout>
  )
}

export default IndexPage
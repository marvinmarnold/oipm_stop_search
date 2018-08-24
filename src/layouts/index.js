import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Analysis of New Orleans Police Department (NOPD) Stop & Firsk activity by the New Orleans Independent Police Monitor (OIPM).' },
        { name: 'keywords', content: 'police, monitor, accountability, stop, search, frisk, New Orleans, NOPD, OIPM' },
      ]}
    >
      <html lang="en-US" />
      <head profile="http://www.w3.org/2005/10/profile" />
      <link rel="icon"
          type="image/png"
          href="favicon.png" />
    </Helmet>

    <Header siteTitle={data.site.siteMetadata.title} />

    <div className="container">
      {children()}
    </div>

    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
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
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
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

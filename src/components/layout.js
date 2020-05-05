import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Heart from './Heart'
import Arc from './Arc';
import Guess from './Guess';
import { Corona, Corona2, Corona3, Corona4, Corona5, Corona6 } from './Corona';
import Download from './Download'
import Snake from './Snake'
import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <Guess />
          <br />
          <br />
          <>
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="100" 
                height="100" 
                style={{
                  border: '1px solid black',
                  background: 'black'
                }}
            >
              <Heart />
              {/* <Arc />  */}
            </svg>
            <Download size={100} stroke={5} />
            {/* <Snake /> */}
            <div style={{
              background: 'beige'
            }}> 
              <Corona />
              <Corona2 />
              <Corona3 />
              <Corona4 />
              <Corona5 />
              <Corona6 />
            </div>
          </>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

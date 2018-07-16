import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import '../styles/index.css';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({children, data}) =>{ 
  return(
    <Wrapper>
      <Helmet
        title={data.site.siteMetadata.name}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header name={data.site.siteMetadata.name} 
        image={data.site.siteMetadata.image}
        link={data.site.siteMetadata.link}
        email={data.site.siteMetadata.email}
        cel={data.site.siteMetadata.cel}
      />
      {children()}
    </Wrapper>
  )
}
Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteQueryJson {
    site{
      siteMetadata{
        email
        name
        image
        cel
        link
      }
    }
  }
`

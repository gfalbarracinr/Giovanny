import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import '../styles/index.css';
import profilePic from '../../public/images/profile.jpg';

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
      >
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Helmet>
      <Header name={data.site.siteMetadata.name} 
        image={profilePic}
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
      ...headerQuery
    }
  }
`

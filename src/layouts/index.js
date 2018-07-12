import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import styled from 'styled-components';
import '../styles/index.css';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.8fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "header header"
                       "education experience"
                       "softSkill hardSkill"
                       "reference languages"
                       "footer footer";
`

const Layout = ({ children, data }) => (
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

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        name
        image
        link
        email
        cel
      }
    }
  }
`

export const headerQuery = graphql`
    fragment headerQuery on Site {
        siteMetadata{
        email
        name
        cel
        link
      }
    }



`
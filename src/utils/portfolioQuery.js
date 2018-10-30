export const portfolioQuery = graphql`
    fragment portfolioQuery on PortfolioJson{
        projects{
            url
            image
            title
            text
            message
        }
    }
`

export const portfolioMainQuery = graphql`
    fragment portfolioMainQuery on PortfolioJson{
        main{
            url
            title
            text
            message
        }
    }
`
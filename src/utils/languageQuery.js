export const languageQuery = graphql`
    fragment languageQuery on LanguagesJson{
        year
        institution
        degree{
            career
            description
        }
        language
    }
`
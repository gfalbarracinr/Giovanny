export const educationQuery = graphql`
    fragment educationQuery on EducationJson{
        year
        institution
        degree{
            career
            description
        }
    }

`
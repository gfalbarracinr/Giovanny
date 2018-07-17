export const experienceQuery = graphql`
    fragment experienceQuery on ExperienceJson{
        year
        institution
        degree{
            career
            description
        }
    }


`
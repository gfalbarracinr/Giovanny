import React, { Component } from 'react'
import Education from '../components/presentational/Education';
import Experience from '../components/presentational/Experience';
import SoftSkill from '../components/presentational/SoftSkill';
import styled from 'styled-components';
import HardSkill from '../components/presentational/HardSkill';
import Languages from '../components/presentational/Languages';
import Footer from '../components/presentational/Footer';
import store from '../store';
import { setHeader } from '../actions';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 0.8fr 0.2fr;
  grid-template-areas: "education experience"
                       "softSkill hardSkill"
                       "languages languages"
                       "footer footer";
  @media (max-width: 850px) {
    grid-template-areas: "education education"
                         "experience experience"
                         "softSkill softSkill"
                         "hardSkill hardSkill"
                         "languages languages"
                         "footer footer";
    grid-template-rows:  1fr 1fr 1fr 1fr 0.8fr 0.2fr;
  }
`

class IndexPage extends Component  {
  componentDidMount(){
    store.dispatch(setHeader(false));
  }
  render(){
    const { data } = this.props;
    const courses = data.allEducationJson.edges;

    const jobs = data.allExperienceJson.edges;
    
    const softSkills = data.allSoftskillJson.edges;

    const hardSkills = data.allHardskillJson.edges;

    const lans = data.allLanguagesJson.edges;

    return(

      <Wrapper>
        <Education 
          courses = { courses }
        />

        <Experience 
          jobs = { jobs } 
        />

        <SoftSkill softSkills = { softSkills } />
        <HardSkill hardSkills = { hardSkills }/>
        <Languages
          lans = { lans } 
        />
        <Footer/>
      </Wrapper>
    );
  }
}

export default IndexPage
export const query = graphql`
  query Query {
    allEducationJson{
      edges{
        node{
          ...educationQuery
        }
      }
    }
    allExperienceJson{
      edges{
        node{
          ...experienceQuery
        }
      }
    }
    allSoftskillJson{
      edges{
        node{
          ...softSkillQuery
        }
      }
    }
    allHardskillJson{
      edges{
        node{
          ...hardSkillQuery
        }
      }
    }
    allLanguagesJson{
      edges{
        node{
          ...languageQuery
        }
      }
    }
  }
`
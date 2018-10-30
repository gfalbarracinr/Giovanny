import React, { Component } from 'react';
import store from '../store';
import { setHeader } from '../actions';
import styled from 'styled-components';
import MainProject  from '../components/presentational/Project';
import Footer from '../components/presentational/Footer';
import Projects from '../components/presentational/Projects';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 1fr 0.5fr;
  grid-template-areas: "main-project main-project"
                       "projects projects"
                       "footer footer";
  @media (max-width: 850px) {
    grid-template-rows:  0.2fr 1fr 0.2fr;
  }
`
const Div = styled.div`
  grid-area: projects;
  display: flex;
  flex-wrap: wrap;
`
class portfolio extends Component {
    constructor(props){
        super(props);
        this.state ={
            language: 'es'
        }
        store.subscribe(() => {
            this.setState({ language: store.getState().language });
        });
    };
    componentDidMount(){
        store.dispatch(setHeader(true))
    }

    render() {
        const data = this.props.data.allPortfolioJson.edges[0].node
        console.log(data);
        return (
            <Wrapper>
                <MainProject
                    url = { data.main.url }
                    title = { data.main.title }
                    text = { this.state.language === 'es' ? data.main.text : data.main.message }
                />
                <Div>
                    {
                        data.projects.map((project, index) =>(
 
                            <Projects
                                key={ index } 
                                url={ project.url }
                                image={ project.image } 
                                title={ project.title }
                                text={ this.state.language === 'es' ? project.text : project.message }
                            />
                        ))
                    }
                </Div>
                <Footer/>
            </Wrapper>
        );
    }
}

export default portfolio;

export const query = graphql`
    query QueryPortfolio {
        allPortfolioJson{
            edges{
                node{
                    ...portfolioQuery
                }
            }
        }
        allPortfolioJson{
            edges{
                node{
                    ...portfolioMainQuery
                }
            }
        }
    }


`
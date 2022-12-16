import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';
import store from '../../store';
import { LangSelector } from './LangSelector';

const Wrapper = styled.div`
  grid-area: footer;
  margin-bottom: 1.45rem;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 400px) {
    margin-left: 0;
    margin-top:0;
  }
  align-self: end;
`

const Acknowledge = styled.div`
  display: flex;
  margin-top: 5%;
  font-size: 95%;
  align-items: baseline;
  justify-content: space-around;
  & > p {
        color: #868586;
  }
`
const Link = styled.a`
    text-decoration: none;
    color: #868586;
    &:hover{
        color: black;
    }   
`
const PortfolioLink = styled.button`
    cursor: pointer;

`
class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false
        }

        store.subscribe(() =>{
            this.setState({ visible: store.getState().visible })
        })
    }
    portfolioText = () => {
        return this.state.language === 'es'? 'Visita mi portafolio': 'Visit my portfolio';
    }  
    render(){
        return (
            <Wrapper>
                <Acknowledge>
                    <p>Giovanny Albarracín</p>
                    <PortfolioLink onClick={() => this.props.history.push('/portfolio')}>{this.portfolioText()}</PortfolioLink>
                    <Link href="https://twitter.com/GioAlbarracin">
                        <FontAwesome
                            className="super-crazy-colors"
                            name="twitter"
                            size="lg"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight: '5px' }}
                        />
                        Twitter
                    </Link>
                    
                    <Link href="https://github.com/gfalbarracinr">
                        <FontAwesome
                            className="super-crazy-colors"
                            name= "github"
                            size="lg"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight: '5px' }}
                        />
                        Github
                    </Link>
                    <LangSelector />
                </Acknowledge>
            </Wrapper>
        );
    }
};

export default withRouter(Footer);
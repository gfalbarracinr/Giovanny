import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Store from '../store';
import '../styles/index.css';


const Wrapper = styled.div`
  grid-area: header;
  margin-bottom: 1.45rem;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 400px) {
    margin-left: 0;
  }
`
const WrapperHeader = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  display: grid;
  grid-template-columns: 160px 1.5fr 1fr;
  grid-template-areas: "img name career"
                       "img info about"; 
  @media (max-width: 770px) {
    grid-template-columns: 160px 1fr 1fr;
    grid-template-areas: "img name career"
                         "img info info"; 

  }
  @media (max-width: 450px) {
    grid-template-columns: 160px 1fr ;
    grid-template-areas: "img name"
                         "img info"; 
  }                
  @media (max-width: 400px){
    grid-template-columns: 100px 1fr;
  }      
`

const TextHeader= styled.h1`
  align-self: end;
  margin-top: 8%;
  margin: 0;
  padding-bottom: 3%;
  padding-left: 5%;
  color: #190D0E;
  grid-area: name;
  border-bottom: 5px solid #190D0E;
  & > a {
    text-decoration: none;
    color: #190D0E;
    
  }
  
  @media (max-width: 770px) {
    font-size: 90%;
  }
`
const Img = styled.img`
  grid-area: img;
  border-radius: 50%;
  max-width: 150px;
  border: 5px solid #190D0E;
  justify-self: end;
  width: 350px;
  @media (max-width: 400px){
    max-width: 130px; 
  }
`

const Career = styled.div`
  align-self: end;
  margin-top: 8%;
  grid-area: career;
  border-bottom: 5px solid #190D0E;
  & > p{
    text-align: right;
    margin-bottom: 3.5%;
  }
  margin-right: 5%;
  @media (max-width: 770px) {
    font-size: 70%;
  }
  @media (max-width: 450px) {
    display: none;
  }
  
`

const InfoDiv = styled.div`
  grid-area: info;
  margin-top: 5%;
  margin-left: 5%;
  font-size: 80%;
  @media (max-width: 350px) {
    margin-left: 0%;
    font-size: 70%;
  }
`
const Info = styled.ul`
  margin:  0;
  list-style-type: none;
  & > li{
    text-decoration: none;
    display: inline-block;
  }
  & > li > a{
    text-decoration: none;
  }
`

const About = styled.div`
  grid-area: about;

  & > p{
    display: ${ props => !props.portfolio ? 'inherit' : 'none'};
    margin-left: 10%;
    text-align: justify;
    margin-right: 5%;
    margin-top: 3%;
  }
  & > h1{
    display: ${ props => props.portfolio ? 'inherit' : 'none'};
    margin-left: calc(100% - 230px);
    text-align: justify;
    margin-right: 5%;
    margin-top: 5%;
  }
  @media (max-width: 770px) {
    display: none;
  }
`

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      portfolio: false,
      language: 'es'
    }
    Store.subscribe(() => {
      this.setState({ portfolio: Store.getState().visible, language: Store.getState().language });
    });

  };
  render(){
    const { name, image, link, cel, email } = this.props;
    return(
      <Wrapper>
        <WrapperHeader>
        <Img src={image}/>
          <TextHeader>
            <Link to="/">
              {name}
            </Link>
          </TextHeader>
          <Career>
          <p>{ this.state.language === 'es'?"Ing de Sistemas y Computación": "Systems and Computer Engineering"}</p>
          </Career>
          <InfoDiv>
            <Info>
              <li className="li-header"><a href={`mailto:${email}`}>{email}</a></li>
              <li style={{ marginLeft: '20%'}}><p>{cel}</p></li>
            </Info>
            <Info>
              <li className="li-header"><a href={`https://${link}`}>{link}</a></li>
              <li className="li-header" style={{ marginLeft: '24%'}}><a target="_blank" href="https://docs.wixstatic.com/ugd/e3f3f6_ab01c4f91ccf48bebf2d174d749dffdf.pdf" download> PDF</a></li>
            </Info>
          </InfoDiv>
          <About portfolio = { this.state.portfolio }>
            <h1>{this.state.language === 'es'? "PORTAFOLIO": "PORTFOLIO"}</h1>
            <p>
              {
              this.state.language === 'es' ? 
                'Soy estudiante, desarrollador web e ingeniero de sistemas. ' +
                'Actualmente estoy viviendo en Bogotá. Me interesa la tecnología ' +
                'y la programación también me gusta el fútbol y la música'
                : 'I am a student, web developer, and software engineer currently ' +
                  'living in Bogotá, Colombia. My interests range from technology to ' +
                  'web development. I am also interested in programming, soccer, and music.'
              } 
            </p>
          </About>
        </WrapperHeader>
      </Wrapper>
    )
  }
}

export default Header

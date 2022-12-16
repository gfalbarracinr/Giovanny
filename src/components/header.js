import React, { Component } from 'react'
import Link from 'gatsby-link'
import Store from '../store';
import pdfEn from '../assets/cv-en.pdf';
import '../styles/index.css';
import { About, Career, Img, Info, InfoDiv, TextHeader, Wrapper, WrapperHeader } from './header.styles';
import headerData from '../data/header.json';
import { LangSelector } from './presentational/LangSelector';

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

  render() {
    const header = headerData.find(data => data.lang === this.state.language);
    const { name, image, link, cel, email } = this.props;
    let pdf = pdfEn;
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
          <LangSelector />
          <p>{ header.career} </p>
          </Career>
          <InfoDiv>
            <Info>
              <li className="li-header"><a href={`mailto:${email}`}>{email}</a></li>
              <li style={{ marginLeft: '20%'}}><p>{cel}</p></li>
            </Info>
            <Info>
              <li className="li-header"><a href={`https://${link}`}>{link}</a></li>
              <li className="li-header" style={{ marginLeft: '24%'}}><a target="_blank" href={pdf} download> PDF</a></li>
            </Info>
          </InfoDiv>
          <About portfolio = { this.state.portfolio }>
            <h1>{this.state.language === 'es'? "PORTAFOLIO": "PORTFOLIO"}</h1>
            <p>
              { header.text } 
            </p>
          </About>
        </WrapperHeader>
      </Wrapper>
    )
  }
}

export default Header

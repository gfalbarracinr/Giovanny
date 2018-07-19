import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

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

const Button = styled.button`
  text-align: center;
  margin-left: 48%;
  background-color: black;
  color: white;
  border: 1px bisque white;
  cursor: pointer;
  width: 120px;
  height: 30px;
  border-radius:10px;

  &:hover{
      width:125px;
      height: 35px;
  }
`
const Acknowledge = styled.div`
  display: flex;
  margin-top: 5%;
  font-size: 95%;
  & > p {
        color: #868586;
  }
`
const Link = styled.a`
    margin-left: auto; 
    text-decoration: none;
    color: #868586;
    &:hover{
        color: black;
    }
    
`
const Footer = () => {
    return (
        <Wrapper>
            <Button> Ver Portafolio</Button>
            <Acknowledge>
                <p>Giovanny Albarracín</p>
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
            </Acknowledge>
        </Wrapper>
    );
};

export default Footer;
import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: header;
  margin-bottom: 1.45rem;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 400px) {
    margin-left: 0;
  }
`
export const WrapperHeader = styled.div`
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

export const TextHeader= styled.h1`
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
export const Img = styled.img`
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
export const Career = styled.div`
  align-self: end;
  margin-top: 8%;
  grid-area: career;
  border-bottom: 5px solid #190D0E;
  & > p{
    text-align: right;
    margin-bottom: 3.5%;
  }
  margin-right: 5%;
  display: flex;
  justify-content: end;
  @media (max-width: 450px) {
    display: none;
  }
  
`

export const InfoDiv = styled.div`
  grid-area: info;
  margin-top: 5%;
  margin-left: 5%;
  @media (max-width: 350px) {
    margin-left: 0%;
    font-size: 70%;
  }
`
export const Info = styled.ul`
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

export const About = styled.div`
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
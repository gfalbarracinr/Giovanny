import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
 margin-left: 10%;
 display: flex;
 
 
 & > hr{
   background-color: #190D0E;
   width: ${props => props.width};
   color: #190D0E;
   margin-left: ${props => props.margin};
   margin-top: 2%;
   border: 1px solid #190D0E;
 }
`

const Title = (props) =>{

    const CustomTag = `h${props.h}`;
    return (
        <TitleDiv margin={props.margin} width={props.width}>
            <CustomTag>{props.title}</CustomTag>
            <hr/>
        </TitleDiv>
    );
};

Title.defaultProps = {
    title: "No title",
    width: "60%",
    h: "2",
    margin: "10%"
};
export default Title;
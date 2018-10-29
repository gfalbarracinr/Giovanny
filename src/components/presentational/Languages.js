import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Item from '../container/Item';

const Wrapper = styled.div`

  grid-area: languages;
  margin-bottom: 1.45rem;
  margin-top: 5%;
  margin-right: 5%;
  width: 50%;
  @media (max-width: 800px) {
    margin-left: 0;
    margin-top:0;
    width: 100%;
}
`

const Wrapp = styled.div`
  display: flex;
  flex-direction: column;

`
const Languages = ({ lans }) => {
    return (
        <Wrapper>
            <Wrapp>
            <Title title="IDIOMAS" h="2"/>
            <Item items={lans}/>
          </Wrapp>
        </Wrapper>
    );
};

export default Languages;
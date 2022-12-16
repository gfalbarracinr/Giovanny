import React from 'react';
import store from '../../store';
import { setLanguage } from '../../actions';
import styled from 'styled-components';


export const LangSelector = () => {
    const Lang = styled.p`
    display: inline-block;
    &:hover{
        color: black;
    }
    cursor: pointer;
    `;
    const Lang1 = styled(Lang)`
        margin-left: 5%;
    `;
    const Section = styled.section`
        margin-left: 5%;
        display:flex;
        margin-right: 30px;
    `;
    const changeLanguage = (lang) =>{
        store.dispatch(setLanguage(lang));
    }
  return (
    <Section>
        <Lang1 onClick={()=>{ changeLanguage('en')}}>EN/</Lang1>
        <Lang onClick={()=>{ changeLanguage('es')}}>ES</Lang>
    </Section>
  )
}

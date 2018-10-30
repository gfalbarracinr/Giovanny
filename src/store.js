import { createStore } from 'redux';

const reducer = (state, action) => {
    
    if(action.type === 'SET_HEADER'){
        return {
            ...state,
            visible: action.visible
        }
    }else if (action.type === 'SET_LANGUAGE'){
        return{
            ...state,
            language: action.language
        }
    }
    
    return state;
}



export default createStore(reducer, { visible: true, language: 'es' });
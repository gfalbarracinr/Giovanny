import { createStore } from 'redux';

const reducer = (state, action) => {
    
    if(action.type === 'SET_HEADER'){
        return {
            ...state,
            visible: action.visible
        }
    }
    
    return state;
}



export default createStore(reducer, { visible: true });
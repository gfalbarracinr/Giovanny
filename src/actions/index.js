export const setHeader = (value) =>{
    return {
        type: 'SET_HEADER',
        visible: value
    }
}

export const setLanguage = (lan) =>{
    return {
        type: 'SET_LANGUAGE',
        language: lan
    }
}

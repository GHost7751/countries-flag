import { CLEAR_DETAILS, SET_BOARDS, SET_COUNTY, SET_ERROR, SET_LOADING } from "./details-actions"

const initialState = {
    currentCountry : null,
    status : 'idle',
    error : null,
    neighbors : []
}

export const detailsReducer = (state = initialState, {type,payload}) => {
    switch(type) {
        case SET_LOADING: 
        return {
            ...state,
            error : null,
            status : 'loading'
        }
        case SET_ERROR : 
        return {
            ...state,
            status : 'reject',
            error : payload,
        }
        case SET_COUNTY :
            return {
                ...state,
                status : 'received',
                currentCountry : payload,
            }
        case CLEAR_DETAILS :
            return initialState   
        case SET_BOARDS :
            return {
                ...state,
                neighbors : payload,
            }    


        default :
        return state
    }
}
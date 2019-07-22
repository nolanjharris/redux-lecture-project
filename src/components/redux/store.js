import { createStore } from 'redux';

//ititial state
const initialState = {
    username: '',
    favShow: '',
    favMovie: '',
    favColor: '',
    favBand: '',
    favFood: ''
}

//constants
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_FAV_SHOW = 'UPDATE_FAV_SHOW';
export const UPDATE_FAV_MOVIE = 'UPDATE_FAV_MOVIE';
export const UPDATE_FAV_FOOD = 'UPDATE_FAV_FOOD';
export const UPDATE_FAV_BAND = 'UPDATE_FAV_BAND';
export const UPDATE_FAV_COLOR = 'UPDATE_FAV_COLOR';

//reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case UPDATE_FAV_SHOW:
            return {
                ...state,
                favShow: action.payload
            }
        case UPDATE_FAV_MOVIE:
            return {
                ...state,
                favMovie: action.payload
            }
        case UPDATE_FAV_FOOD:
            return {
                ...state,
                favFood: action.payload
            }
        case UPDATE_FAV_COLOR:
            return {
                ...state,
                favColor: action.payload
            }
        case UPDATE_FAV_BAND:
            return {
                ...state,
                favBand: action.payload
            }
        default: return state;
    }
}

export default createStore(reducer);
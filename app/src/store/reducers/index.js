//index.js in reducers directory
import { FETCH_CARD_START, FETCH_CARD_SUCCESS, FETCH_CARD_FAILURE } from "../actions";

const initialState = {
    isLoading: false,
    cardData: [],
    error: "",
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARD_START: 
            return{
                ...state,
                isLoading: true,
                error: "",
            };
        case FETCH_CARD_SUCCESS:
            return{
                ...state, 
                isLoading: false,
                cardData: action.payload,
                error: "",
            };
        case FETCH_CARD_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}
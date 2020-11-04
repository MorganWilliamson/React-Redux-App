//index.js in reducers directory
import { FETCH_CARD_START, FETCH_CARD_SUCCESS, FETCH_CARD_FAILURE } from "../actions";

const initialState = {
    isLoading: false,
    cardData: [],
    error: "",
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
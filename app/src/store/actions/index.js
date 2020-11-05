//index.js located in actions directory
import axios from "axios";

//Action Types:
export const FETCH_CARD_START = "FETCH_CARD_START"
export const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS"
export const FETCH_CARD_FAILURE = "FETCH_CARD_FAILURE"

//Action Creators: 
export const getCard = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CARD_START });

        axios   
            .get("https://api.scryfall.com/cards/random")
            .then((response) => {
                console.log(response);
                dispatch({ type: FETCH_CARD_SUCCESS, payload: response.object.data });
            })
            .catch((err) => {
                // console.log(err.message);
                dispatch({ type: FETCH_CARD_FAILURE, payload: err.response });
            });
    };
};
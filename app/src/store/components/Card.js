//Card component
import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { getCard } from "../actions/index";

const Card = (props) => {
    useEffect(() => {
        props.getCard();
    }, []);
    
    return (
        <div className="cardComp">
            <h2>Random Card:</h2>
            {props.isLoading ? <p>Loading a random card. . .</p> : null}
            {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
            {props.cardData.map((card) => (
                <div>
                    <h4>{card.name}</h4>
                </div>
            ))};
        </div>
    );
};

//mapStateToProps
const mapStateToProps = (state) => {
    return{
        isLoading: state.isLoading,
        cardData: state.cardData,
        error: state.error,
    };
};

//add: connect, mapStateToProps
export default connect(mapStateToProps, { getCard })(Card);
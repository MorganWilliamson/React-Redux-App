//React
import React from "react";

//Redux
import { connect } from "react-redux";
import { getCard } from "./store/actions";

//Components
import Card from "./components/Card";

//Stylesheet
import './App.css';

function App(props) {
  const fetchCard = (e) => {
    e.preventDefault();
    props.getCard();
  };

  return (
    <div className="App">
      <h2>Random Card Generator:</h2>
        {props.isLoading ? <p>Loading a random card. . .</p> : null}
        {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
        <div>
          {props.cardData.map((card) => (
            <Card card={card} />
          ))}
        </div>
        <button onClick={fetchCard}>Get New Card</button>
    </div>
  );
}

//mapStateToProps
const mapStateToProps = (state) => {
  return{
      isLoading: state.isLoading,
      cardData: state.cardData,
      error: state.error,
  };
};


//add: connect, mapStateToProps
export default connect(mapStateToProps, { getCard })(App);
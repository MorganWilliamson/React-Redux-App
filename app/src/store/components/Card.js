//Card component
import React from "react";

export default function Card({ card }) {
    return (
        <div className="cardComp">
            <h4>{card.name}</h4>
        </div>
    );
};


//Card component
import React from "react";

export default function Card({ card }) {
    return (
        <div className="cardComp">
            <h4>{card.name}</h4>
            <img src={card.image_uris.normal} alt={`The art for ${card.name}.`}/>
            <p>Mana Cost: {card.mana_cost}</p>
            <p>Rarity: {card.rarity}</p>
            <p>Current Value: ${card.prices.usd} USD</p>
            <p>This card was released on {card.released_at} as part of the {card.set_name} expansion.</p>
        </div>
    );
};


import React from "react";
import cards from "../pages/api/cards.json";
const wideCards = cards.wide_cards;

const WideCardsSection = () => {
  return (
    <div>
      {wideCards.map((card) => {
        return <div key={card.title}>{card.title}</div>;
      })}
    </div>
  );
};

export default WideCardsSection;

import React from "react";
import SmallCard from "./SmallCard";
import cards from "../pages/api/cards.json";
const smallCards = cards.small_cards;

function SmallCardsSection() {
  return (
    <div className="flex flex-col justify-center md:grid grid-cols-3">
      {smallCards.map((card) => {
        return <SmallCard key={card} card={card} />;
      })}
    </div>
  );
}

export default SmallCardsSection;

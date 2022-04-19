import React from "react";
import SmallCard from "./SmallCard";

function SmallCardsSection({ cards }) {
  return (
    <div className="flex flex-col justify-center md:grid grid-cols-3">
      {cards.map((card) => {
        return <SmallCard key={card} card={card} />;
      })}
    </div>
  );
}

export default SmallCardsSection;

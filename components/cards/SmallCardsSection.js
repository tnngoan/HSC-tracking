import React from "react";
import SmallCard from "./SmallCard";

function SmallCardsSection({ cards }) {
  return (
    <div className="flex flex-col justify-around md:grid grid-cols-3 py-5 my-8 md:my-16">
      {cards.map((card, i) => {
        return <SmallCard key={i} card={card} />;
      })}
    </div>
  );
}

export default SmallCardsSection;

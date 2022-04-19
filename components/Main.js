import React from "react";
import SmallCardsSection from "./SmallCardsSection";
import WideCard from "./WideCard";
import SearchBanner from "./SearchBanner";
import cards from "../pages/api/cards.json";
const smallCards = cards.small_cards;
const wideCards = cards.wide_cards;

const Main = () => {
  return (
    <div className="px-40">
      <SearchBanner />
      <WideCard card={wideCards[0]} order="order-last" />
      <WideCard card={wideCards[1]} order="order-first" />
      <SmallCardsSection cards={smallCards} />
      <WideCard card={wideCards[2]} order="order-last" />
    </div>
  );
};

export default Main;

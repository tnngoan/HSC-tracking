import React from "react";
import SmallCardsSection from "../../cards/SmallCardsSection";
import WideCard from "../../cards/WideCard";
import SearchBanner from "./SearchBanner";
import Banner from "./Banner";
import DownloadSection from "./DownloadSection";
import cards from "../../../pages/api/cards.json";
const smallCards = cards.small_cards;
const wideCards = cards.wide_cards;

const Main = () => {
  return (
    <div className="lg:px-40">
      <SearchBanner />
      <Banner />
      <WideCard card={wideCards[0]} order="order-last" />
      <WideCard card={wideCards[1]} order="order-first" />
      <SmallCardsSection cards={smallCards} />
      <WideCard card={wideCards[2]} order="order-last" />
      <DownloadSection />
    </div>
  );
};

export default Main;

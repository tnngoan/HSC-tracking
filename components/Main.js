import React from "react";
import SmallCardsSection from "./SmallCardsSection";
import WideCardsSection from "./WideCardsSection";
import SearchBanner from "./SearchBanner";

const Main = () => {
  return (
    <div className="px-20">
      <SearchBanner />
      <SmallCardsSection />
      <WideCardsSection />
    </div>
  );
};

export default Main;

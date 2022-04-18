import React from "react";
import CardsSection from "./CardsSection";
import SearchBanner from "./SearchBanner";

const Main = () => {
  return (
    <div className="px-24">
      <SearchBanner />
      <div className="flex flex-col justify-center md:grid grid-cols-3">
        <CardsSection />
      </div>
    </div>
  );
};


export default Main;

import React, { useState } from "react";
import Card from "./Card";
import SearchBanner from "./SearchBanner";

const Main = () => {
  const getCards = async() => {
    await fetch("")
  }
  return (
    <div className="px-24">
      <SearchBanner />
      <div className="flex flex-col justify-center md:grid grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;

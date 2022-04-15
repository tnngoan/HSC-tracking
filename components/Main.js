import React, { useState } from "react";
import Card from "./Card";
// import cards from "../pages/api/cards.json";

const Main = () => {
  const [cards, setCards] = useState([]);
  const getCards = async () => {
    const response = await fetch("/api/cards");
    const data = response.json();
    setCards(data);
  };
  return (
    <div className="flex flex-col justify-center md:grid grid-cols-3">
      {cards}
    </div>
  );
};

export default Main;

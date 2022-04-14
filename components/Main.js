import React from "react";
import Card from "./Card";

const Main = () => {
  const cards = fetch("/api/cards")
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(cards);
  return (
    <div className="flex flex-col justify-center md:grid grid-cols-3"></div>
  );
};

export default Main;

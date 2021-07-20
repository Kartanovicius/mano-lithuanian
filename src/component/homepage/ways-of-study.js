import React from "react";
import { useState, useEffect } from "react";

export default function WaysOfStudy() {
  const [card, setCards] = useState("");

  useEffect(() => {
    setCards(
      <button
        className={"bg-grey-bg rounded-md hover:shadow-md font-light"}
      >
        <img
          className={"rounded-md object-cover w-full"}
          src="./images/imagecard.png"
          alt={"happy people"}
        />
        <div className="text-left py-6 px-8">
          <h3 className="text-2xl pb-3 whitespace-nowrap">Speakng club</h3>
          <p>The most important aspect when moving</p>
        </div>
      </button>
    );
  }, []);

  return (
    <div className={'container mx-auto'}>
      <p
        className={
          "flex text-4xl sm:text-5xl md:text-6xl justify-center text-center items-center font-light py-10"
        }
      >
        We offer different ways of learning
      </p>
      <div className={"flex px-2 sm:px-0 pb-10 gap-8 overflow-y-auto"}>
        {card}
        {card}
        {card}
        {card}
      </div>
    </div>
  );
}

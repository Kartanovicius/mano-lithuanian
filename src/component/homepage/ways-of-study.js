import React from "react";
import { useState, useEffect } from "react";

export default function WaysOfStudy() {
  const [card, setCards] = useState("");

  useEffect(() => {
    setCards(
      <button className={"bg-grey-bg rounded-md hover:shadow-md font-light"}>
        <img className={'rounded-md object-cover w-full'} src='./images/imagecard.png'/>
        <div className='text-left py-6 px-8'>
            <h3 className='text-2xl pb-3 whitespace-nowrap'>Speakng club</h3>
            <p>The most important aspect when moving</p>
        </div>
      </button>
    );
  }, []);

  return <div className={'flex px-4 sm:px-14 pb-10 gap-8 overflow-y-auto'}>
      {card}      
      {card}
      {card}
      {card}
  </div>;
}

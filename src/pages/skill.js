import React, { useState } from "react";
import Logo from "../component/logo";

export default function Skill() {
  const [buttonConfirm, setButtonConfirm] = useState("Check");
  const [choice, setchoice] = useState('')
  const words = ["Laba diena!", "Labas vakaras!", "Labas rytas!", "Sveikas"];
  const mapWords = words.map((word) => (
    <button
      className={
        "hover:bg-green hover:text-white focus:bg-green focus:text-white bg-white rounded-md py-4 px-8 border-2 border-black text-left text-lg w-full"
      }
      onClick={(e) => setchoice(e.target.innerText)}
      key={word}
    >
      {word}
    </button>
  ));

  const handleClickConfirmButton = () => {
      if(choice == 'Labas rytas!')    setButtonConfirm("Next");
  };

  return (
    <div>
      <Logo />
      <div
        className={
          "h-screen flex flex-col bg-grey-bg px-4 lg:px-52 justify-center "
        }
      >
        <p className={"text-center"}>Category: Basic</p>
        <p className={"text-3xl text-center pb-12"}>
          Which one means <b>Good morning</b>
        </p>
        <div className={"space-y-5"}>{mapWords}</div>
        <span className={"flex items-start justify-end"}>
          <button
            className={"bg-green text-white rounded-md py-3 w-36 mt-4 text-lg"}
            onClick={handleClickConfirmButton}
          >
            {buttonConfirm}
          </button>
        </span>
      </div>
    </div>
  );
}

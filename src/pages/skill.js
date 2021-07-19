import React, { useState } from "react";
import Logo from "../component/logo";

export default function Skill() {
  const [confirmButton, setconfirmButton] = useState("Check");
  const [selectedOption, setselectedOption] = useState("");
  const [selectedOptionColor, setselectedOptionColor] = useState('bg-yellow text-black');
  const [disableButton, setdisableButton] = useState('')
  const [rightAnswer, setrightAnswer] = useState('')

  const words = ["Laba diena!", "Labas vakaras!", "Labas rytas!", "Sveikas"];
  const answer = "Labas rytas!";
  const question = `Which one of these is "Good morning"`;

  const mapWords = words.map((word) => (
    <button
      className={`hover:bg-yellow hover:text-black rounded-md py-4 px-8 border-2 border-black text-left text-lg w-full ${
        selectedOption === word ? `${selectedOptionColor}` : ""
      } ${disableButton} ${rightAnswer === word ? ' bg-green text-white' : ''}`}
      onClick={(e) => {
        setselectedOption(e.target.innerText);
      }}
      id={word}
      key={word}
    >
      {word}
    </button>
  ));

  const handleClickConfirmButton = () => {
    setconfirmButton("Next");
    setdisableButton('pointer-events-none ')
    setrightAnswer(answer)
    if (selectedOption === answer) {
      return setselectedOptionColor('bg-green text-white ');
    } else {
      return setselectedOptionColor('bg-red text-white ');
    }
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
          {question}
        </p>
        <div className={"space-y-5"}>{mapWords}</div>
        <span className={"flex items-start justify-end"}>
          <button
            className={
              "bg-green text-white rounded-md py-3 w-full md:w-36 mt-5 text-lg"
            }
            onClick={handleClickConfirmButton}
          >
            {confirmButton}
          </button>
        </span>
      </div>
    </div>
  );
}

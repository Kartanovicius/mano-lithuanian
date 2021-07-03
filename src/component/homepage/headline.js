import React from "react";

export default function Headline() {
  return (
    <div className={"h-screen"}>
      <img
        src={"images/bg.jpg"}
        className={"h-5/6 w-full object-cover absolute hidden sm:block"}
      />
      <div className={'h-5/6 w-full absolute bg-gradient-to-r from-yellow-lighter to-yellow-darker sm:hidden'}></div>
      <div className={"grid grid-cols-1 sm:grid-cols-2 relative z-10 h-5/6 w-full"}>
        <div></div>
        <div
          className={
            "flex justify-center items-center font-light sm:font-normal text-5xl text-right mx-10 md:mx-14"
          }
        >
          <p>
            <b>Labas</b>, Learning Lithuanian has never been this easy
          </p>
        </div>
      </div>
      <p className={"flex text-5xl lg:text-6xl justify-center text-center items-center h-1/6 font-light px-1"}>
        We offer different ways of learning
      </p>
    </div>
  );
}

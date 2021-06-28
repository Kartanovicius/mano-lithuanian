import React from "react";

export default function Headline() {
  return (
    <div className={"h-screen"}>
      <img
        src={"images/bg.jpg"}
        className={"h-5/6 w-full object-cover absolute"}
      />
      <div className={"grid grid-cols-2 relative z-10 h-5/6 w-full"}>
        <div></div>
        <div
          className={
            "flex justify-center items-center text-5xl text-right mr-14"
          }
        >
          <p>
            <b>Labas</b>, Learning Lithuanian has never been this easy
          </p>
        </div>
      </div>
      <p className={"flex text-4xl md:text-5xl lg:text-6xl text-center justify-center items-center h-1/6 font-light"}>
        We offer different ways of learning
      </p>
    </div>
  );
}

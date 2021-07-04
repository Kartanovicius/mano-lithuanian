import React from "react";
import { NavLink } from "react-router-dom";

export default function Headline() {
  return (
    <div className={"h-screen"}>
      <img
        src={"images/bg.jpg"}
        className={"h-5/6 w-full object-cover absolute hidden md:block"}
      />
      <div
        className={
          "h-5/6 w-full absolute bg-gradient-to-r from-yellow-lighter to-yellow-darker md:hidden"
        }
      ></div>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 content-center relative z-10 h-5/6 w-full"
        }
      >
        <div></div>
        <div
          className={
            "flex flex-col md:items-end font-light text-4xl sm:text-5xl md:text-6xl text-right mx-4 md:mx-14"
          }
        >
          <p>
            <b>Labas</b>, Learning Lithuanian has never been this easy
          </p>
          <NavLink to={`/skill`}>
            <button
              className={
                "bg-green border-2 border-black p-3 text-lg font-medium text-white mt-8 md:mt-4 rounded-md w-full md:w-60"
              }
            >
              Let’s start
            </button>
          </NavLink>
        </div>
      </div>
      <p
        className={
          "flex text-4xl sm:text-5xl md:text-6xl justify-center text-center items-center h-1/6 font-light px-2"
        }
      >
        We offer different ways of learning
      </p>
    </div>
  );
}

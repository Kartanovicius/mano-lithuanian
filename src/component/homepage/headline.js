import React from "react";
import { NavLink } from "react-router-dom";

export default function Headline() {
  return (
    <div className={"w-full pt-40 pb-20 bg-yellow"}>
        <div
          className={
            "flex flex-col items-center text-center font-light text-4xl sm:text-5xl md:text-6xl container mx-auto"
          }
        >
          <p className={'text-8xl font-light font-overpass'}>Labas</p>
          <p>
            Learning Lithuanian has never been this easy
          </p>
          <NavLink to={`/skill`}>
            <button
              className={
                "bg-green p-3 text-white mt-8 md:mt-14 text-xl px-14 py-5 md:py-3 rounded-2xl hover:shadow-lg transition duration-500 w-full md:w-80"
              }
            >
              Let’s start
            </button>
          </NavLink>
      </div>
    </div>
  );
}

import React from "react";
import {NavLink} from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink to={`/`}>
    <button class="absolute inset-x-4 md:inset-x-0 md:w-36 mx-auto z-20 grid grid-cols-2 mt-3 font-overpass">
        <div className={"flex justify-end"}>
          <img src={"./images/logo.svg"} width={"70px"} />
        </div>
        <p className={"flex ml-2 text-xl w-0 items-center text-left"}>Mano Lithuanian</p>
      </button>
    </NavLink>
  );
}

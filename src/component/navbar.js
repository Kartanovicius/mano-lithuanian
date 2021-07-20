import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={"fixed top-0 h-20 bg-black bg-opacity-80 w-full"}>
      <div className={"container mx-auto flex h-full items-center"}>
        <NavLink to={`/`}>
          <button class="flex flex-row font-overpass h-full">
            <img
              src={"./images/logo.svg"}
              alt={"Mano Lithuanian logo"}
              width={"55px"}
            />
            <p
              className={
                "flex h-16 items-center align-middle ml-2 text-lg text-left text-white leading-6"
              }
            >
              Mano<br/> Lithuanian
            </p>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

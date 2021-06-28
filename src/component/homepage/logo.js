import React from "react";

export default function Logo() {
  return (
    <div class="absolute inset-x-0 w-3/4 md:w-2/5 mx-auto z-10 grid grid-cols-2 mt-3 font-overpass">
      <div  className={'flex justify-end'}>
      <img src={'./images/logo.svg'} width={'77px'}/>
      </div>
      <p className={'flex ml-2 text-xl w-0 items-center'}>Mano Lithuanian</p>
    </div>
  );
}

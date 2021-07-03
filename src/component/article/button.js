import React from "react";

export default function Button() {
  return (
    <div className={'flex w-full justify-center my-7'}>
      <button
        className={
          "bg-green text-white px-14 py-4 text-xl rounded-md mb-5 hover:shadow-inner transition duration-500 hover:bg-green-hover"
        }
      >Start Learning now</button>
    </div>
  );
}

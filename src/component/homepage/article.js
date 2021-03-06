import React from "react";
import { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom';

export default function Article() {
  const [news, setNews] = useState("");

  useEffect(() => {
    setNews(
      <NavLink to={`/article`}>
        <button
          className={
            "w-full bg-white rounded-md py-3 px-4 sm:px-7 hover:shadow-md "
          }
        >
          <p className={"text-lg text-left"}>What language should I learn?</p>
          <div
            className={
              "flex whitespace-nowrap lg:text-xs xl:text-base font-light justify-between focus-within pt-6"
            }
          >
            <p>By Mano Lithuanian</p>
            <div className={"flex gap-2 pl-2"}>
              <p>6/20/2021</p>
              <p className={"text-green"}>6 min Read</p>
            </div>
          </div>
        </button>
      </NavLink>
    );
  }, []);
  return (
    <div className={"bg-grey-bg py-10"}>
      <div className={'container mx-auto'}>
      <h1 className={"text-4xl sm:text-5xl md:text-6xl font-light"}>
        The Mano Lithuanian blog
      </h1>
      <p className={"text-lg font-light py-5 sm:w-1/2"}>
        Articles exploring the world of languages, learning guides and tips,
        news, stories and more, brought to you by the Mano Lithuanian crew
      </p>
      <button
        className={
          "bg-green text-white px-14 py-2 text-xl rounded-md mb-5 hover:shadow-lg transition duration-500 "
        }
      >
        Read more
      </button>
      <div className={"grid grid-cols-1 lg:grid-cols-3 flex-wrap gap-5 pt-5"}>
        {news}
        {news}
        {news}
      </div>
      </div>
    </div>
  );
}

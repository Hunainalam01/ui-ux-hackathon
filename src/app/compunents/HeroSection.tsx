"use client";
// import Image from "next/image";
// import heroSofa from "../hero.png";
import React from "react";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="hero-parent  flex flex-col sm:flex-row sm:items-center sm:justify-center sm:h-[130vh] h-[50rem] bg-[rgb(251,235,181)]">
      <div className="sm:w-[50%] sm:h-[50%] h-[50%] flex items-center sm:items-end sm:justify-end ">
        <div className=" w-[100%]  sm:pl-[20%] px-[8%] flex flex-col sm:items-start items-center sm:justify-end ">
          <h1 className="   font-myFont font-semibold sm:text-5xl text-4xl leading-[2rem] sm:leading-[3.5rem]   sm:h-[180px] sm:w-[100%] tracking-wider">
            Rocket single <br className="hidden sm:inline" /> seater
          </h1>

          <div className="w-[80%] sm:h-28 h-16 flex sm:items-start sm:justify-start justify-start items-end ">
            <Link
              className="font-myFont font-medium text-xl border-b-2  tracking-wide border-black hover:text-gray-700 "
              href={"/shop"}
            >
              shop Now
            </Link>
          </div>
        </div>
      </div>  

      <div className="sm:w-[50%] sm:p-0 p-3 w-[100%] sm:h-[70%] h-[100%] flex justify-center ">
        <div className="hero-bg sm:w-[100%] w-[90%] sm:h-[100%] h-[100%]  ">
         </div>
      </div>

    </div>
  );
}

export default HeroSection;

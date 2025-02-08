"use client";
import Image from "next/image";
import React from "react";
import asgaardSofa from "../../../public/Asgaard-sofa 1.png";

function Sofa() {
  return (
    <div className=" bg-green-300  sm:h-[105vh] h-120vh ">
      <div
        className="  h-[100%] 
      sm:flex-row flex-col w-full bg-[#FFF9E5] 
      flex items-center justify-around"
      >
        <div className="  ">
          <Image
            src={asgaardSofa}
            alt="sofa image"
            height={630}
            width={753}
          ></Image>
        </div>

        <div className=" mr-10 h-[90%] w-full sm:w-[25%] flex justify-center items-center">
          <div className=" mb-8 gap-6 flex flex-col items-center justify-center sm:w-[100%] w-[100%] h-[205px]">
            <p className="   font-medium text-[24px] font-myFont">
              New Arrivals
            </p>
            <h1 className="   font-bold text-[48px] font-myFont  ">
              Asgaard Sofa
            </h1>

            <button className="border-[1px] h-20 sm:w-[65%] w-[60%] font-myFont border-black transition-colors duration-300 hover:bg-black hover:text-white">
              Order Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Sofa;

import React from "react";
import Image from "next/image";
import item1 from "../../../public/Cloud_sofa_three_seater_+_ottoman_3_1__1_-removebg-preview.png";
import item2 from "../../../public/Granite_square_side_table_1__1_-removebg-preview.png";
import Link from "next/link";

function Item() {
  return (
    <div className="    bg-[#faf4f4] flex items-center justify-around h-[700px] w-full">
      <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:flex-row sm:items-center flex flex-col w-full h-[100%]  sm:col-span-10">
        <div className="sm:col-span-6 sm:h-[80%] h-[50%] m-12 rounded-[1rem]  hover:scale-105 transition-all duration-300 shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[7px_7px_11px_3px_rgba(0,_0,_0,_0.35)] ">
          <div
            className="sm:h-[70%] flex justify-center
          "
          >
            <Image
              className="sm:mt-10 sm:h-[80%] sm:w-[80%]"
              src={item1}
              alt="porduct image"
              width={250}
              height={100}
            ></Image>
          </div>

          <div
            className="
           h-[15%]        
            sm:h-[15%] flex sm:items-start sm:justify-start justify-start items-start "
          >
            <Link
              className="font-myFont font-medium ml-8 text-xl tracking-wide  hover:text-gray-700 "
              href={"/shop"}
            >
              Side table
            </Link>
          </div>

          <div
            className="h-[15%] 
          "
          >
            <Link
              className="   font-myFont font-medium text-lg border-b-2 ml-8  tracking-wide border-black hover:text-gray-700 "
              href={"/shop"}
            >
              View More
            </Link>
          </div>
        </div>

        <div className="sm:col-span-6 sm:h-[80%] h-[50%] m-12 rounded-[1rem]  hover:scale-105 transition-all duration-300 shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[7px_7px_11px_3px_rgba(0,_0,_0,_0.35)] ">
          <div
            className="sm:h-[70%] flex justify-center
          "
          >
            <Image
              className="sm:mt-10 sm:h-[80%] sm:w-[80%]"
              src={item2}
              alt="porduct image"
              width={250}
              height={100}
            ></Image>
          </div>

          <div
            className="
           h-[15%]        
            sm:h-[15%] flex sm:items-start sm:justify-start justify-start items-start "
          >
            <Link
              className="font-myFont font-medium ml-8 text-xl tracking-wide  hover:text-gray-700 "
              href={"/shop"}
            >
              Side table
            </Link>
          </div>

          <div
            className="h-[15%] 
          "
          >
            <Link
              className="   font-myFont font-medium text-lg border-b-2 ml-8  tracking-wide border-black hover:text-gray-700 "
              href={"/shop"}
            >
              View More
            </Link>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default Item;

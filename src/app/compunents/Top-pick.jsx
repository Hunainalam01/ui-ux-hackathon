import Link from "next/link"; 
import React from "react";
import ProductCard from "@/app/compunents/ProductCard";
import { urlFor } from "@/sanity/lib/image";
import FetchData from "@/sanity/FetchData";
async function TopPick() {
  const data = await FetchData();
  const data2 = data.slice(0, 4);
  return (
    <div className="flex flex-col h-[100%] sm:h-[118vh] w-full px-[1.5rem]  ">
      <div className="sm:h-[95%] h-auto">
        <div className="h-[150px]  flex flex-col items-center justify-center ">
          <div className="vw-[100%] flex items-center justify-center">
            <h1 className="font-medium font-myFont text-[36px] px-4 ">
              Top Picks For You
            </h1>
          </div>

          <div className=" w-[100%] flex items-center justify-center text-center">
            <p className=" font-medium text-[#9F9F9F] font-myFont text-[16px] px-6">
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor and table lights.
            </p>
          </div>
        </div>

        <div className="  bg-white p-8 flex sm:flex-row flex-col justify-center items-center w-[100%]">
          {data2 &&
            data2.map((item) => {
              return (
                <ProductCard
                  key={item._id}
                  name={item.name}
                  price={item.price}
                  imageUrl={urlFor(item.image).url()}
                  alt={item.name}
                  href="/shop"
                />
              );
            })}
        </div>

        <div className=" w-[100%] h-[3rem] mt-[1rem] flex justify-center items-center ">
          <div className="mb-10 h-[80%] sm:h-[100%]  flex items-center justify-center w-[65%] rounded-md border-[1px] border-black sm:border-none sm:hover:bg-none hover:bg-black  bg-white transition-all  sm:hover:text-gray-500 hover:text-white">
            <Link
              className=" font-bold sm:text-lg border-b-2 tracking-widest font-myFont border-white sm:border-black "
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

export default TopPick;

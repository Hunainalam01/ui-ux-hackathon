import React from "react";
import Link from "next/link";

function OurInsta() {
  return (
    <div className="our-intsa h-full flex items-center justify-center">
      <div className="gap-5 w-full h-[80%] p-4 flex flex-col items-center justify-center">
        <div className="w-full h-auto sm:text-5xl text-4xl tracking-wider font-bold sm:font-extrabold flex  items-center justify-center ">
          <h1>Our Instagram</h1>
        </div>
        <div className="w-full h-[2rem] font-thik flex items-center justify-center ">
          <p>Follow our store on Instagram</p>
        </div>
        <div className="w-[30%] sm:w-[12rem] font-medium  h-[3rem] rounded-full flex items-center justify-center  hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)] ">
           <Link href={""}>
           Follow Us
           </Link> 
        </div>
      </div>
    </div>
  );
}

export default OurInsta;

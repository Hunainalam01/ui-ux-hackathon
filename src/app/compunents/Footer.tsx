"use client";
import React from "react";
// import image from "../../../public/Cloud sofa three seater + ottoman_3 1.png"

function Footer() {
  return (
    <>
      {/* <div className="m-4 grid gap-4 sm:grid-cols-12 ">
        <div className="min-h-10 rounded-sm bg-orange-400 shadow-xl sm:col-span-2"></div>
        <div className="min-h-10 rounded-sm bg-teal-400 shadow-xl sm:col-span-2"></div>
        <div className="min-h-10 rounded-sm bg-yellow-500 shadow-xl sm:col-span-4"></div>
        <div className=" gap-3 bg-pink-400 m-2 min-h-10 rounded  sm:col-span-4">
          
        </div>
      </div> */}

      <footer className=" w-[100%] px-[8%]  ">
        <div className="grid gap-3 sm:grid-cols-12">
          <div className=" m-2 min-h-10 rounded sm:col-span-3">
            <div className="h-[90%] flex justify-between">
              <div className="flex justify-center items-center text-[16px]">
                <p className="text-[#9F9F9F] ">
                  400 University Drive Suite 200 Coral <br />
                  Gables,
                  <br /> FL 33134 USA
                </p>
              </div>
            </div>
          </div>

          <div className="m-2 min-h-[400px] rounded  sm:col-span-2">
            <div>
              <div className="flex flex-col w-[15%] h-[88%]  items-start gap-[3rem] ">
                <p className="font-medium   text-[#9F9F9F]">Links</p>
                <a className="font-medium    decoration-black" href="/.">
                  Home{" "}
                </a>
                <a className="font-medium     decoration-black" href="/.">
                  Shop
                </a>
                <a className="font-medium    decoration-black" href="/.">
                  About
                </a>
                <a className="font-medium    decoration-black" href="/.">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="m-2 min-h-10 rounded sm:col-span-2">
            <div className="flex flex-col  h-[90%]  items-start gap-[3rem]">
              <p className="font-medium   text-[#9F9F9F]">Payment Option</p>
              <a className="font-medium decoration-black" href="/.">
                Payment Option
              </a>
              <a className="font-medium decoration-black" href="/.">
                Returns
              </a>
              <a className="font-medium decoration-black" href="/.">
                Privacy Policies
              </a>
            </div>
          </div>

          <div className=" m-2 min-h-10 rounded sm:col-span-4  ">
            <div className="flex flex-col w-[100%] h-[100%] mr-[8rem] gap-[3rem]  ">
              <p className=" text-[#9F9F9F] font-medium">Newsletter</p>

              <div className="flex flex-wrap   w-90%">
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  name="name"
                  className="border-b-[1px] border-black  mr-[2rem]"
                />
                <a
                  className="font-medium border-b-[1px] border-black  decoration-black "
                  href="/."
                >
                  SUBSCRIBE
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[4rem] flex items-center border-t-2 border-[#D9D9D9] mt-10">
          <p>2022 Meubel House. All rights reverved</p>
        </div>
      </footer>
    </>
  
  );
}

export default Footer;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/shop/logo.png";

function CheckOut() {
  return (
    <div className="h-auto w-full">
      {/* top */}
      <div className="shop-page  h-full flex items-center justify-center mb-12">
        <div className="gap-3 w-full h-[100%] p-4 flex flex-col items-center justify-center">
          <div className="w-full h-auto sm:text-5xl text-4xl tracking-wider font-medium flex flex-col  items-center justify-center ">
            <Image src={logo} alt="logo"></Image>
            <h1>Checkout</h1>
          </div>
          <div className="w-full h-[3rem] font-thin flex items-center justify-center ">
            <Link href={"/"}>
              <span className="font-medium ">
                Home{" "}
                <b className="inline-block sm:scale-y-[1.9] scale-y-[1.5] font-medium">
                  &gt;{" "}
                </b>{" "}
              </span>
            </Link>
            <p>Checkout</p>
          </div>
        </div>
      </div>
      {/* ==== */}


    

      {/* benifits----------- */}
      <div className=" gap-4 sm:grid flex flex-col items-center sm:grid-cols-12 bg-[#faf4f4]   h-auto lg:p-6 sm:p-12">
        {/* 01 */}
        <div className="w-[80%] xl:p-14 sm:p-6 p-7 flex justify-center items-start flex-col sm:col-span-4  ">
          <h1 className="text-2xl font-semibold">Free Delivery</h1>
          <p className="text-[#9F9F9F] font-normal">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>

        {/* 02 */}
        <div className="w-[80%] xl:p-14 sm:p-6 p-7 flex justify-center items-start flex-col sm:col-span-4">
          <h1 className="text-2xl font-semibold">90 Days Return</h1>
          <p className="text-[#9F9F9F] font-normal">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>

        {/* 03 */}
        <div className="w-[80%] xl:p-14 sm:p-6 p-7 flex justify-center items-start flex-col sm:col-span-4">
          <h1 className="text-2xl font-semibold">Secure Payment</h1>
          <p className="text-[#9F9F9F] font-normal">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
      {/* ==== */}
    </div>
  );
}

export default CheckOut;

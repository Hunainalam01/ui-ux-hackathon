import Image from "next/image";
import Link from "next/link";
import React from "react";
import addressIcon from "../../../public/contact/Vector.png";
import logo from "../../../public/shop/logo.png"
import callIcon from "../../../public/contact/bxs_phone.png";
import workIcon from "../../../public/contact/bi_clock-fill.png";

function Contact() {
  return (
    <div className="h-auto w-full">
      {/* top */}
      <div className="shop-page  h-full flex items-center justify-center mb-12">
        <div className="gap-3 w-full h-[100%] p-4 flex flex-col items-center justify-center">
          <div className="w-full h-auto sm:text-5xl text-4xl tracking-wider font-medium flex flex-col  items-center justify-center ">
           <Image src={logo} alt="logo"></Image>
            <h1>Contact</h1>
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
            <p>Contact</p>
          </div>
        </div>
      </div>
      {/* ==== */}

      {/* /get in touch  */}
      <div className="sm:h-[150px] h-[10rem]  flex flex-col items-center justify-start sm:justify-center sm:mt-[3rem]">
        <h1 className=" w-full text-center font-medium font-myFont text-[36px]">
          Get In Touch With Us
        </h1>
        <p className="px-10 w-full sm:w-[60%] lg:w-[50%] text-center font-medium text-[#9F9F9F] font-myFont text-[16px]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!{" "}
        </p>
      </div>
      {/* ==== */}

      {/* Contact form */}
      <div className="h-auto w-full p-10">
        <div className="h-auto w-auto lg:w-[100%] py-10 flex sm:items-center sm:justify-center sm:gap-20  md:flex-row flex-col">
          {/* info */}
          <div className=" bg-white flex flex-col  items-center justify-center py-10 gap-3 ">
            {/* one  */}
            <div className="gap-2 grid grid-cols-12 h-[8rem] sm:h-[7rem] w-[70%] ">
              <div className="w-[100%] col-span-3">
                <div className="flex justify-end  w-[100%]  p-2">
                  <Image
                    src={addressIcon}
                    alt="icon"
                    height={20}
                    width={20}
                  ></Image>
                </div>
              </div>
              <div className="w-[100%] col-span-9">
                <h1 className="font-semibold text-lg">Address</h1>
                <p className="font-md text-sm tracking-wider">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            {/* two  */}

            <div className="gap-2 grid grid-cols-12 h-[8rem] sm:h-[7rem] w-[70%]  ">
              <div className="w-[100%] col-span-3">
                <div className="flex justify-end  w-[100%]  p-2">
                  <Image
                    src={callIcon}
                    alt="icon"
                    height={20}
                    width={20}
                  ></Image>
                </div>
              </div>
              <div className="w-[100%] col-span-9">
                <h1 className="font-semibold text-lg">Phone</h1>
                <p className="font-md text-sm tracking-wider">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            {/* three */}
            <div className="gap-2 grid grid-cols-12 h-[8rem] sm:h-[7rem] w-[70%] ">
              <div className="w-[100%] col-span-3">
                <div className="flex justify-end  w-[100%]  p-2">
                  <Image
                    src={workIcon}
                    alt="icon"
                    height={20}
                    width={20}
                  ></Image>
                </div>
              </div>
              <div className="w-[100%] col-span-9">
                <h1 className="font-semibold text-lg">Working Time</h1>
                <p className="font-md text-sm tracking-wider">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00{" "}
                </p>
              </div>
            </div>
            {/* ==== */}
          </div>

          {/* form */}
          

          <div className=" flex items-center justify-center min-h-screen bg-white">
            <div className="w-full sm:W-[50rem] max-w-md p-6 bg-white rounded-lg  ">
              
              <form className=" md:w-[25rem]">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
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

export default Contact;

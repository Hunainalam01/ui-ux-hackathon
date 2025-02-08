"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import navIcon1 from "../../../public/account-alert-icon.png";
import navIcon2 from "../../../public/akar-icons_search.png";
import navIcon4 from "../../../public/cart-icon.png";
import navIcon3 from "../../../public/heart-icon.png";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();

  const navColor = pathname === "/" ? "bg-[#fbebb5]" : "bg-white";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={` h-[100px] w-[100%] flex items-center justify-end relative ${navColor}`}
    >
      <div className="flex justify-between w-[90%]">
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl p-2   rounded-full  hover:font-semibold hover:rounded-full"
          >
            ☰
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden sm:flex sm:justify-between sm:w-[50%]">
          <div>
            <Link href={"/"} className="font-myFont">
              Home
            </Link>
          </div>
          <div>
            <Link href={"/shop"} className="font-myFont">
              Shop
            </Link>
          </div>
          <div>
            <Link href={"/about"} className="font-myFont">
              About
            </Link>
          </div>
          <div>
            <Link href={"/contact"} className="font-myFont">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-around sm:w-[35%] w-[80%] ">
          <Link href={"/checkout"}>
            <Image src={navIcon1} alt="icon" height={20} width={20}></Image>
          </Link>
          <Link href={"/"}>
            {" "}
            <Image src={navIcon2} alt="icon" height={20} width={20}></Image>
          </Link>
          <Link href={"/checkout"}>
            {" "}
            <Image src={navIcon3} alt="icon" height={20} width={20}></Image>
          </Link>
          <Link href={"/cart"}>
            {" "}
            <Image src={navIcon4} alt="icon" height={20} width={20}></Image>
          </Link>
        </div>
      </div>

      {/* small screen side bar */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 h-[100vh] w-[250px] bg-[#fbebb5] shadow-md z-50">
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h2 className="text-lg font-myFont">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-2xl font-bold text-gray-700 hover:text-gray-900"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <Link href={"/"} className="font-myFont" onClick={toggleMenu}>
              Home
            </Link>
            <Link href={"/shop"} className="font-myFont" onClick={toggleMenu}>
              Shop
            </Link>
            <Link href={"/about"} className="font-myFont" onClick={toggleMenu}>
              About
            </Link>
            <Link
              href={"/contact"}
              className="font-myFont"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

// border-2 border-red-600

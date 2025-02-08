"use client";
import HeroSection from "./compunents/HeroSection";
import React from "react";
import Item from "./compunents/Item";
import Sofa from "./compunents/Sofa";
import TopPick from "./compunents/Top-pick";
import OurBlog from "./compunents/Our-blog";
import OurInsta from "./compunents/Our-insta";
import CheckOut from "./checkout/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Item />
      <TopPick />
      <Sofa />
      <OurBlog />
      <OurInsta />
      <CheckOut />
    </div>
  );
}

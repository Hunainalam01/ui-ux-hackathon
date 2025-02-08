import Image from "next/image";
import React from "react";
import Link from "next/link";
import blog1 from "../../../public/Rectangle 13.png";
import blog2 from "../../../public/Rectangle 14.png";
import blog3 from "../../../public/Rectangle 15.png";

function OurBlog() {
  return (
    <div className="flex flex-col md:h-[944px] h-auto sm:w-full sm:px-[4rem] p-5">
      <div className=" sm:h-[150px] h-[7rem]  flex flex-col items-center justify-start sm:justify-center sm:mt-[3rem]">
        <h1 className=" w-full text-center font-medium font-myFont text-[36px]">
          Our Blogs
        </h1>
        <p className=" w-full text-center font-medium text-[#9F9F9F] font-myFont text-[16px]">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      <div className="flex flex-col  p-4">
        <div className=" flex justify-around items-center w-[100%]">
          <div className=" gap-6 flex flex-col md:flex-row  items-center justify-center">
            {/* one */}
            <div className="  gap-1 rounded-xl flex flex-col items-center w-[80%] hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className="w-[100%] ">
                <Link href={"/blog"}>
                  <Image
                    src={blog1}
                    alt="Product image"
                    width={350}
                    height={397}
                  ></Image>
                </Link>
              </div>

              <div className="gap-3 flex flex-col justify-center items-center w-[100%] h-auto">
                <div className="text-base p-1">
                  <p> Going all-in with millennial design</p>
                </div>
                <div className=" font-semibold ">
                  <Link href={"/blog"}>
                    <p>Read More</p>
                  </Link>
                </div>
                <div className="text-sm font-light">
                  <p>5 min 12th Oct 2022</p>
                </div>
              </div>
            </div>

            {/* two */}
            <div className="  gap-1 rounded-xl flex flex-col items-center w-[80%] hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className="w-[100%] ">
                <Link href={"/blog"}>
                  <Image
                    src={blog2}
                    alt="Product image"
                    width={350}
                    height={397}
                  ></Image>
                </Link>
              </div>

              <div className="gap-3 flex flex-col justify-center items-center w-[100%] h-auto">
                <div className="text-base p-1">
                  <p> Going all-in with millennial design</p>
                </div>
                <div className=" font-semibold border-b-2 border-black">
                  <Link href={"/blog"}>
                    <p>Read More</p>
                  </Link>
                </div>
                <div className="text-sm font-light">
                  <p>5 min 12th Oct 2022</p>
                </div>
              </div>
            </div>

            {/* three */}
            <div className="  gap-1 rounded-xl flex flex-col items-center w-[80%] hover:scale-[102%] transition-all shadow-[1px_3px_17px_-3px_rgba(0,_0,_0,_0.35)] hover:shadow-[4px_3px_10px_3px_rgba(0,_0,_0,_0.35)]">
              <div className="w-[100%] ">
                <Link href={"/blog"}>
                  <Image
                    src={blog3}
                    alt="Product image"
                    width={350}
                    height={397}
                  ></Image>
                </Link>
              </div>

              <div className="gap-3 flex flex-col justify-center items-center w-[100%] h-auto">
                <div className="text-base p-1">
                  <p> Going all-in with millennial design</p>
                </div>
                <div className=" font-semibold border-b-2 border-black">
                  <Link href={"/blog"}>
                    <p>Read More</p>
                  </Link>
                </div>
                <div className="text-sm font-light">
                  <p>5 min 12th Oct 2022</p>
                </div>
              </div>
            </div>            

            {/* !!!!!!!!!!!!!!!! */}
          </div>
        </div>

        <div className=" w-[100%] h-[3rem] mt-[5rem] flex justify-center">
          <Link
            className=" font-bold sm:text-xl border-b-2 tracking-widest font-myFont border-black"
            href={"/shop"}
          >
            View All Post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurBlog;

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard(props) {
    const {href, imageUrl, alt, name, price } = props
  return (
    <div className="sm:mx-2 sm:mt-0 mt-[1rem] bg-white md:h-[100%] sm:h-[15rem]  h-[100%]  flex flex-col items-center rounded-xl hover:scale-[102%] transition-all shadow-md hover:shadow-lg">
              <div className=" ">
                <Link href={href}>
                  <Image
                    className="h-96 w-full object-cover"
                    src={imageUrl}
                    alt={alt}
                    width={287}
                    height={397}
                  ></Image>
                </Link>
              </div>
              <div className="h-7 pl-3 text-small w-full flex justify-start items-end ">
                <p>{name}</p>
              </div>

              <div className="h-10 font-semibold text-xl pl-3 text-small w-full flex justify-start items-center ">
                <h2>Rs. {price}</h2>
              </div>
            </div>
  )
}

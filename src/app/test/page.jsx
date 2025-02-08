// import FetchData from "@/sanity/FetchData";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// // import product from "@/sanity/schemaTypes/product";
// import React from "react";

// export default async function page() {
//   const data = await FetchData();
//   console.log(data);
//   return (
//     <div>
//       {data &&
//         data.map((item) => {
//           console.log(urlFor(item.image));
//           return (
//             <div key={item._id}>
//               <div className="border border-red-900  p-4 ">
//                 <Image
//                   alt={item.name}
//                   width={500}
//                   height={500}
//                   src={urlFor(item?.image).url()}
//                 />
//                 <p>{item.name}</p>
//                 <p>{item.price}</p>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

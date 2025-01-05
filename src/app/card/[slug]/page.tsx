import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";
import {Blog} from "@/app/page";
import Link from "next/link";


interface Params {
  params: {
    slug: string;
  };
}
const cardpost = async (params: Params) => {

    const { slug } = params.params

  const data:Blog = await client.fetch( `*[_type == "blog" && slug.current == $slug]
    {heading,
    description,
    fuel,
    cartype,
    transmission,
    capacity,
    "slug":slug.current,
    "imageUrl":image.asset->url
    }[0]`,{slug}
 
  );
  return <main>
<div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-10">
    {/* Car Image */}
    <div className="w-full lg:w-1/2">
      <Image
        src={data.imageUrl}
        alt={data.heading}
        height={600}
        width={600}
        className="rounded-lg shadow-md"
      />
    </div>

    {/* Car Details */}
    <div className="text-center lg:text-left w-full lg:w-1/2">
      <h2 className="text-4xl font-bold text-gray-800 mt-4 lg:mt-0">{data.heading}</h2>
      <div className="text-sm text-gray-600 mt-4 space-y-2">
        <p><span className="font-semibold">Fuel:</span> {data.fuel}</p>
        <p><span className="font-semibold">Transmission:</span> {data.transmission}</p>
        <p><span className="font-semibold">Capacity:</span> {data.capacity}</p>
      </div>
      <p className="text-lg text-gray-700 font-medium mt-6">{data.description}</p>
    </div>
  </div>

  {/* Rent Now Button */}
  <div className="flex justify-center mt-10">
    <Link href={"/payment"}>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg transition-all duration-300">
        Rent Now
      </button>
    </Link>
  </div>
</div>

    
</main>
};

export default cardpost;

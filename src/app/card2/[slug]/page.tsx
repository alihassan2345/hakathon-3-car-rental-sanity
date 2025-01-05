import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";
import {Blog2} from "@/app/categorie-car-rent/page";
import Link from "next/link";


interface Params {
  params: {
    slug: string;
  };
}

const cardpost2 = async ({ params }: Params) => {
  const { slug } = params;

  // Fetch data from Sanity
  const data2: Blog2 | null = await client.fetch(
    `*[_type == "blog2" && slug.current == $slug]{
      heading,
      description,
      fuel,
      cartype,
      transmission,
      capacity,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }[0]`,
    { slug }
  );

  // Check if data is null
  if (!data2) {
    return (
      <main className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Error: Data not found</h1>
        <p className="text-gray-700">The requested car details could not be found. Please check the URL or try again later.</p>
      </main>
    );
  }

  return (
    <main>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-10">
          {/* Car Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src={data2.imageUrl}
              alt={data2.heading}
              height={600}
              width={600}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Car Details */}
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mt-4 lg:mt-0">
              {data2.heading}
            </h2>
            <div className="text-sm text-gray-600 mt-4 space-y-2">
              <p>
                <span className="font-semibold">Fuel:</span> {data2.fuel}
              </p>
              <p>
                <span className="font-semibold">Transmission:</span>{" "}
                {data2.transmission}
              </p>
              <p>
                <span className="font-semibold">Capacity:</span> {data2.capacity}
              </p>
            </div>
            <p className="text-lg text-gray-700 font-medium mt-6">
              {data2.description}
            </p>
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
  );
};

export default cardpost2;

import Hero from "@/components/Hero";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export interface Blog {
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
}





export default async function Home() {
  const data:Blog[] =await client.fetch(`*[_type == "blog"]{
  heading,
    description,
    "slug":slug.current,
    "imageUrl":image.asset->url
  }`)
  return (
 
       <div>

      


        <Hero/>
   </div>
 
  );
}
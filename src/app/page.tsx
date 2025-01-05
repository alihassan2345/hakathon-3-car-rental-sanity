import Hero from "@/components/Hero";
import { client } from "@/sanity/lib/client";


export interface Blog {
  capacity:string;
  transmission:string;
  fuel:string;
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
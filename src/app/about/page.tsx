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
  }`,[6])
  return (
 
       <div className="flex flex-wrap gap-6 mt-[100px] ml-[250px] justify-center items-center w-[900px]  ">
{
  data.map((blog , index)=>{
return (
  
        <Link key={index} href={`/card/${blog.slug}`}>
       <div className="">    
         <Image src= {blog.imageUrl} alt="ahsja" width={200} height={200} />
         
          <div className="text-center"> 
          <h2>{blog.heading}</h2>
          <p>{blog.description}</p>
          </div>
       </div>
      </Link>
      
)
  })
}


      
   </div>
 
  );
}
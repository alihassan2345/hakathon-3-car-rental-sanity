import Hero from "@/components/Hero";

export interface Blog {
  capacity: string;
  transmission: string;
  fuel: string;
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

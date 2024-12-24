import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function Home() {
  
  const query =`*[_types == homepage][0]{
    heading,
    paragraph,
    buttonText,
    image
}`

  const sanityData = await client.fetch(query);
  
  return (
    <div className="flex flex-col items-center content-center min-h-screen py-2 mx-20">
      <h1>Sanity</h1>
      <h2>{sanityData.heading}</h2>
      <p>{sanityData.paragraph}</p>
      <button>{sanityData.buttonText}</button>
      <Image src={urlFor(sanityData.image).url()} alt="saity image" height={200} width={200}/>

    </div>
  );
}

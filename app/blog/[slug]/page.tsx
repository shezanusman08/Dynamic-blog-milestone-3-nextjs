import { fullBlog } from "../../lib/interface";
import { urlFor } from "../../lib/sanity";
import {client} from "../../lib/sanity"
import { PortableText } from "next-sanity";

import Image from "next/image";

async function getData(slug: string){
    const query = `
    *[_type == "blog" && slug.current == '${slug}']{
  "currentSlug": slug.current,
    title,
    content,
    titleImage
}[0]`;

    const data = await client.fetch(query);
    return data;

}


export default async function BlogArticle({params}: {params: {slug: string}}){
    const data: fullBlog = await getData(params.slug)

    return(
        <div>
            <h1>
                <span className="Block text-base text-center text-blue-500 font-semibold tracking-wide uppercase">Shezan - Blogs</span>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>

            <Image src={urlFor(data.titleImage).url()}
             width={800} 
             height={800} 
             alt="picture"
             priority
             className="w-full max-w-[800px] h-auto rounded-lg border"
             />

             <div className="mt-16 prose prose-blue prose-xl prose-li:marker:text-blue-500 ">
                <PortableText value={data.content}/>
             </div>
        </div>
        
        
    )
}
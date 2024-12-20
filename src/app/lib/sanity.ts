import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    apiVersion: "2024-12-20",
    dataset: "production",
    projectId: "ixdb1wxg",
    useCdn: false,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}
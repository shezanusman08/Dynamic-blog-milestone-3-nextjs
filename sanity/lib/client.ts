import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

// Initialize the Sanity client
export const client = createClient({
  apiVersion: "2024-11-24",
  dataset: "production",
  projectId: "6w3noj16",
  useCdn: false,
});

// Initialize the image URL builder
const builder = ImageUrlBuilder(client);

// Use 'unknown' instead of 'any', and provide a type guard
export function urlFor(source: unknown) {
  if (source && typeof source === "object") {
    return builder.image(source);
  }
  throw new Error("Invalid image source provided.");
}

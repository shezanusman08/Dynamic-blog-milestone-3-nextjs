// import { client, urlFor } from "./lib/sanity";
// import { IBlogCard } from "./lib/interface";
import Image from "next/image";
import Link from "next/link";
import { client } from "./lib/sanity";
import { simpleBlogcard } from "./lib/interface";
import { urlFor } from "./lib/sanity";


async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }`;
  const data = await client.fetch(query);
  return data;
}

async function HomePage() {
  const data: simpleBlogcard[] = await getData();

  return (
    <div>
{/*       
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-10 mt-8 px-4 lg:px-20">
        {/* Sidebar */}
        <aside className="hidden lg:block w-1/4 space-y-8w-full lg:w-1/4">
          <section>
            <h3 className="font-semibold text-lg mb-3">Blog Topics</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Company</li>
              <li>Design</li>
              <li>Technology</li>
              <li>Crypto</li>
              <li>Artificial Intelligence</li>
              <li>Work</li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="font-semibold text-lg mb-3">Guide and Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Guidelines</li>
              <li>Mentorship</li>
              <li>Tutorial</li>
              <li>Training</li>
              <li>Career</li>
              <li>Self Care</li>
            </ul>
          </section>
        </aside>

        {/* Blog Posts Section */}
        <main className="w-full lg:w-3/4">
          {/* Trending Topics */}
          <section className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Trending Topics</h3>
            <div className="flex gap-3 flex-wrap">
              {["Design Thinking", "Technology", "Web3", "Programming", "AI"].map(
                (topic, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600"
                  >
                    {topic}
                  </span>
                )
              )}
            </div>
          </section>

          {/* Blog Cards */}
          <section>
            {data.map((post, id) => (
              <div
                key={id}
                className="flex flex-col md:flex-row mb-8 gap-5 items-center"
              >
                {/* Blog Image */}
                <div className="w-full md:w-[200px] h-[150px] bg-gray-200 flex-shrink-0">
                  <Image
                    src={urlFor(post.titleImage).url()}
                    alt={post.title}
                    width={200}
                    height={150}
                    
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Blog Content */}
                <div>
                  <p className="text-sm text-blue-500 mb-1">
                    {new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 line-clamp-2 text-sm">
                    {post.smallDescription}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-gray-500 text-sm">
                    <span>By Author</span>
                    <Link
                      href={`/blog/${post.currentSlug}`}
                      className="text-blue-500 hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
       */
    </div>
  );
}

export default HomePage;

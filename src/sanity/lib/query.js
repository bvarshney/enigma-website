// sanity/blog.js
import { client } from "./client";

export async function getBlogs() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage{
      asset->{
        url
}
    }
  } | order(publishedAt desc)`;

  const blogs = await client.fetch(query);
  return blogs;
}

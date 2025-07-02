import { client } from "./client";

export async function getCategories() {
  const query = `*[_type == "category"]{
    _id,
    title,
    slug
  }`;

  const categories = await client.fetch(query);
  return categories;
}

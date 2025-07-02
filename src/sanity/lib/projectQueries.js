import { client } from "./client"

export async function getProjects() {
  const query = `*[_type == "project"]{
    _id,
    title,
    slug,
    description,
    link,
    mainImage {
      asset -> {
        url
      }
    },
    publishedAt
  } | order(publishedAt desc)`

  return await client.fetch(query)
}

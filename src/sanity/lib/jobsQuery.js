// /sanity/lib/jobsQuery.js
import { client } from './client'

// Fetch _all_ jobs
export async function getAllJobs() {
  return await client.fetch(
    `*[_type == "job"]{
      "profileImage": profileImage.asset->url,
      "mainImage": mainImage.asset->url,
      jobTitle,
      experience,
      salary,
      location,
      "slug": slug.current,
      smallDescription,
      features[],
      tag,
      categories[]->{
        title
      }
    }`
  )
}

// Fetch a single job by slug
export async function getJobBySlug(slug) {
  return await client.fetch(
    `*[_type == "job" && slug.current == $slug][0]{
      "profileImage": profileImage.asset->url,
      "mainImage": mainImage.asset->url,
      jobTitle,
      experience,
      salary,
      location,
      smallDescription,
      features[],
      tag,
      body,
      categories[]->{
        title
      }
    }`,
    { slug }
  )
}

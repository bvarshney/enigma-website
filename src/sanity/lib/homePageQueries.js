import { client } from "./client"

export async function getHomepage() {
  const query = `*[_type == "homepage"][0]{
    _id,
    title,
    slug,
    heroContent{
      firstheading,
      secondheading,
      thirdheading,
      subheading,
      backgroundVideo{
        asset -> {
          url
        }
      }
    },
    about{
      heading,
      subheading,
      backgroundImage{
        asset -> {
          url
        }
      }
    },
    faq[]{
      question,
      answer
    }
  }`

  const homepage = await client.fetch(query)
  return homepage
}

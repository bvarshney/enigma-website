import { client } from "./client";

// ✅ Fetch all blog posts
export async function getBlogPosts() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    author[]->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    excerpt,
    loaderText,
    categories[]->{
      _id,
      title
    },
    body,
    metaDescription,
    metaImage,
    featured,
    mainImage{
      asset->{
        url
      }
    }
  } | order(publishedAt desc)`;

  return await client.fetch(query);
}

// ✅ Fetch single blog post by slug
export async function getBlogPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    author[]->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    metaDescription,
    excerpt,
    loaderText,
    categories[]->{
      _id,
      title
    },
    body,
    featured,
    mainImage{
      asset->{
        url
      }
    },
    metaImage {
      asset->{
        url
      }
    }
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) return null;

  // Fetch related blogs based on category
  const relatedQuery = `*[_type == "post" && _id != $postId && count(categories[@._ref in $categoryIds]) > 0]{
    _id,
    title,
    slug,
    publishedAt,
    metaDescription,
    categories[]->{
      _id,
      title
    },
    mainImage{
      asset->{
        url
      }
    }
  }`;

  const categoryIds = post.categories?.map(cat => cat._id) || [];
  const relatedPosts = await client.fetch(relatedQuery, { postId: post._id, categoryIds });

  return { post, relatedPosts };
}


import { format, parseISO } from 'date-fns';
import { getBlogPosts } from '@/sanity/lib/queries';
import FeaturedBlogClient from './FeaturedBlogClient';

async function fetchFeaturedBlog() {
    const blogs = await getBlogPosts();
    const featuredBlog = blogs.filter(blog => blog.featured === true);
    return featuredBlog.length > 0 ? featuredBlog[0] : null; // Get the first featured blog
}

export default async function FeaturedBlog() {

    const blog = await fetchFeaturedBlog();

    if (!blog) return null;

    function formatDate(date, pattern = 'dd/MM/yyyy') {
        if (!date) return '';
        const parsedDate = parseISO(date);
        return format(parsedDate, pattern);
    }

    const formattedDate = formatDate(blog.publishedAt);

    return (
        <section id="featured-post">
            <FeaturedBlogClient blog={blog} formattedDate={formattedDate} />
        </section>
    );
}

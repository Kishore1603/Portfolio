import type { BlogPost } from "@/types";
import blogsData from "@/data/blogs.json";

/**
 * Loads all blog posts from the local JSON data file.
 * Blogs are sorted by date (newest first).
 */
export function loadBlogs(): BlogPost[] {
  const blogs = blogsData as BlogPost[];
  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Finds a single blog post by its ID/slug.
 */
export function getBlogById(id: string): BlogPost | undefined {
  const blogs = blogsData as BlogPost[];
  return blogs.find((blog) => blog.id === id);
}

/**
 * Formats blog date to a nicer display string.
 */
export function formatBlogDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

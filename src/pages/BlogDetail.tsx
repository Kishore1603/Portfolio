import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getBlogById, formatBlogDate } from "@/utils/blogLoader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Simple markdown-to-HTML renderer for blog content.
 * Handles headings, bold, italic, inline code, code blocks, links, and lists.
 */
function renderMarkdown(md: string): string {
  return md
    .split("\n")
    .map((line) => {
      // Headings
      if (line.startsWith("### "))
        return `<h3 class="text-xl font-semibold text-white mt-8 mb-3">${line.slice(4)}</h3>`;
      if (line.startsWith("## "))
        return `<h2 class="text-2xl font-bold text-white mt-10 mb-4">${line.slice(3)}</h2>`;

      // Unordered list items
      if (line.startsWith("- **")) {
        const content = line
          .slice(2)
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');
        return `<li class="ml-4 text-dark-300 mb-1">${content}</li>`;
      }
      if (line.startsWith("- "))
        return `<li class="ml-4 text-dark-300 mb-1">${line.slice(2)}</li>`;

      // Ordered list items
      const olMatch = line.match(/^(\d+)\.\s(.*)/);
      if (olMatch)
        return `<li class="ml-4 text-dark-300 mb-1 list-decimal">${olMatch[2]}</li>`;

      // Empty line => paragraph break
      if (line.trim() === "") return `<br/>`;

      // Regular paragraph
      return `<p class="text-dark-300 leading-relaxed mb-2">${line}</p>`;
    })
    .join("\n")
    // Inline formatting
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
    .replace(
      /`(.*?)`/g,
      '<code class="px-1.5 py-0.5 bg-dark-800 text-primary-300 rounded text-sm font-mono">$1</code>'
    )
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 underline underline-offset-2">$1</a>'
    );
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blog = id ? getBlogById(id) : undefined;

  if (!blog) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="section-container text-center pt-32">
          <h1 className="text-3xl font-bold text-white mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-dark-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20"
      >
        {/* Back link */}
        <Link
          to="/#blog"
          className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-primary-600/10 text-primary-300 rounded-lg"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 text-dark-400 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatBlogDate(blog.date)}
            </span>
            <span className="capitalize px-2 py-0.5 text-xs bg-dark-800 rounded">
              {blog.source}
            </span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(blog.content) }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-dark-800">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </div>
      </motion.article>
      <Footer />
    </div>
  );
}

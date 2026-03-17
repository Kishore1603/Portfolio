import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight, Linkedin, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { loadBlogs, formatBlogDate } from "@/utils/blogLoader";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const blogs = loadBlogs();

  return (
    <section id="blog" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm mb-2">06. Blog</p>
          <h2 className="section-heading">Blog & Insights</h2>
          <p className="section-subheading">
            Thoughts on data engineering, analytics, and technology.
          </p>
        </motion.div>

        {/* LinkedIn section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-600/10">
              <Linkedin className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">LinkedIn Posts</h3>
              <p className="text-dark-400 text-sm">
                I also share insights and updates on LinkedIn.
              </p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/kishorekumar-110589225"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 rounded-lg transition-colors text-sm font-medium"
          >
            View LinkedIn
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Blog cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group"
            >
              {/* Gradient top bar */}
              <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-600" />

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-primary-600/10 text-primary-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-white font-semibold text-lg leading-tight group-hover:text-primary-400 transition-colors line-clamp-2 block mb-2"
                >
                  {blog.title}
                </Link>

                {/* Preview */}
                <p className="text-dark-400 text-sm line-clamp-3 mb-4">
                  {blog.preview}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-dark-500 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatBlogDate(blog.date)}
                  </span>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="flex items-center gap-1 text-primary-400 hover:text-primary-300 text-sm transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Read
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

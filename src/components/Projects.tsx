import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, Clock, Loader2 } from "lucide-react";
import { fetchGitHubRepos, formatDate } from "@/utils/githubAPI";
import type { GitHubRepo } from "@/types";

// Color mapping for common programming languages
const langColors: Record<string, string> = {
  Python: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  Jupyter: "bg-orange-400",
  "Jupyter Notebook": "bg-orange-400",
  Shell: "bg-green-500",
  Java: "bg-red-500",
  "C++": "bg-pink-500",
  R: "bg-blue-300",
};

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    fetchGitHubRepos()
      .then(setRepos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm mb-2">
            05. Projects
          </p>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">
            Auto-loaded from GitHub. Here's what I've been building.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary-400 animate-spin" />
            <span className="ml-3 text-dark-400">Loading projects from GitHub...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="glass-card p-8 text-center">
            <p className="text-dark-400 mb-2">Unable to load projects right now.</p>
            <a
              href="https://github.com/Kishore1603"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              Visit my GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 flex flex-col group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <Github className="w-5 h-5 text-dark-500" />
                  <div className="flex items-center gap-3">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-dark-500 text-xs">
                        <Star className="w-3.5 h-3.5" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1 text-dark-500 text-xs">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold group-hover:text-primary-400 transition-colors mb-2"
                >
                  {repo.name}
                </a>

                {/* Description */}
                <p className="text-dark-400 text-sm flex-1 mb-4 line-clamp-3">
                  {repo.description || "No description provided."}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-dark-400">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            langColors[repo.language] || "bg-dark-500"
                          }`}
                        />
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-dark-500">
                    <Clock className="w-3 h-3" />
                    {formatDate(repo.updated_at)}
                  </span>
                </div>

                {/* Topics/Tags */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-dark-700/50">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 text-xs bg-primary-600/10 text-primary-300 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* GitHub profile link */}
        {!loading && !error && repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <a
              href="https://github.com/Kishore1603"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-dark-600 hover:border-primary-500 text-dark-300 hover:text-white rounded-lg transition-all"
            >
              <Github className="w-4 h-4" />
              View All on GitHub
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

import { Database, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Database className="w-5 h-5 text-primary-400" />
            <span>
              KK<span className="text-primary-400">.</span>
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Kishore1603"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kishorekumar-110589225"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kishoreoff1603@gmail.com"
              className="p-2 text-dark-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} Kishore Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

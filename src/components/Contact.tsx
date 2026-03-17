import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Open email client with pre-filled data
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:kishoreoff1603@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm mb-2">
            07. Contact
          </p>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Have a question or want to work together? Reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:kishoreoff1603@gmail.com"
                  className="flex items-center gap-4 text-dark-300 hover:text-primary-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-primary-600/10 group-hover:bg-primary-600/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs">Email</p>
                    <p className="text-sm">kishoreoff1603@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+917548846608"
                  className="flex items-center gap-4 text-dark-300 hover:text-primary-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-primary-600/10 group-hover:bg-primary-600/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs">Phone</p>
                    <p className="text-sm">+91 7548846608</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-dark-300">
                  <div className="p-2.5 rounded-lg bg-primary-600/10">
                    <MapPin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs">Location</p>
                    <p className="text-sm">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Social Links</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Kishore1603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-dark-700/50 hover:bg-dark-700 rounded-lg transition-colors text-dark-300 hover:text-white text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kishorekumar-110589225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-dark-700/50 hover:bg-dark-700 rounded-lg transition-colors text-dark-300 hover:text-white text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="mailto:kishoreoff1603@gmail.com"
                  className="flex items-center gap-2 px-4 py-2.5 bg-dark-700/50 hover:bg-dark-700 rounded-lg transition-colors text-dark-300 hover:text-white text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
              <h3 className="text-white font-semibold mb-2">Send a Message</h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-dark-400 text-sm mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 bg-dark-800 border border-dark-700 rounded-lg text-white text-sm placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-dark-400 text-sm mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 bg-dark-800 border border-dark-700 rounded-lg text-white text-sm placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-dark-400 text-sm mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 bg-dark-800 border border-dark-700 rounded-lg text-white text-sm placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary-600/25"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

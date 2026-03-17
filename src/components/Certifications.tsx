import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Certified: Fabric Analytics Engineer Associate",
    issuer: "Microsoft",
    link: "", // To be added later
    badge: "DP-600",
  },
  {
    title: "Microsoft Certified: Fabric Data Engineer Associate",
    issuer: "Microsoft",
    link: "", // To be added later
    badge: "DP-700",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm mb-2">
            04. Certifications
          </p>
          <h2 className="section-heading">Certifications</h2>
          <p className="section-subheading">
            Professional certifications validating my expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 md:p-8 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary-600/20 to-primary-500/10 border border-primary-500/20">
                  <Award className="w-7 h-7 text-primary-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold leading-tight mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-dark-400 text-sm">{cert.issuer}</span>
                    <span className="px-2 py-0.5 text-xs font-mono bg-primary-600/10 text-primary-300 rounded">
                      {cert.badge}
                    </span>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary-400 hover:text-primary-300 text-sm mt-3 transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {!cert.link && (
                    <p className="text-dark-500 text-xs mt-3 italic">
                      Certificate link coming soon
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

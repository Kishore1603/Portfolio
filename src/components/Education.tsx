import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "KPR Institute of Engineering and Technology",
    degree: "Bachelor of Technology (BTech)",
    field: "Artificial Intelligence & Data Science",
    period: "September 2020 – May 2024",
    description:
      "Focused on AI, machine learning, data science and engineering fundamentals. Developed a strong foundation in programming and analytical thinking.",
  },
  {
    institution: "Sainik School Amaravathinagar",
    period: "2013 – 2020",
    description:
      "Built a strong foundation in discipline, leadership, and academics at one of India's premier residential schools.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm mb-2">
            03. Education
          </p>
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">
            My academic journey that built the foundation for my career.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-dark-700" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full bg-primary-600 border-4 border-dark-950 z-10" />

                <div className="glass-card p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex p-3 rounded-xl bg-primary-600/10">
                      <GraduationCap className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg">
                        {edu.institution}
                      </h3>
                      {edu.degree && (
                        <p className="text-primary-400 font-medium text-sm mt-1">
                          {edu.degree}
                        </p>
                      )}
                      {edu.field && (
                        <p className="text-dark-300 text-sm">{edu.field}</p>
                      )}
                      <p className="text-dark-500 text-sm mt-1">{edu.period}</p>
                      {edu.description && (
                        <p className="text-dark-400 text-sm mt-3 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

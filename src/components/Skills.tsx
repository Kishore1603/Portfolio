import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  BarChart3,
  Layers,
  Table2,
  BrainCircuit,
} from "lucide-react";

const skills = [
  {
    name: "SQL",
    icon: Database,
    category: "Data Engineering",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Power BI",
    icon: BarChart3,
    category: "Data Visualization",
    color: "from-yellow-500 to-amber-600",
  },
  {
    name: "Microsoft Fabric",
    icon: Layers,
    category: "Data Platform",
    color: "from-primary-500 to-primary-600",
  },
  {
    name: "Excel",
    icon: Table2,
    category: "Data Analysis",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Business Analysis",
    icon: BrainCircuit,
    category: "Strategy",
    color: "from-purple-500 to-purple-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm mb-2">02. Skills</p>
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="section-subheading">
            Technologies and tools I use to build data-driven solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 text-center group cursor-default"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  {skill.name}
                </h3>
                <p className="text-dark-500 text-xs">{skill.category}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

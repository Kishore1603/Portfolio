import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm mb-2">01. About</p>
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            A data professional passionate about turning complexity into clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="glass-card p-8 space-y-4 text-dark-300 leading-relaxed">
              <p>
                I'm a data professional who enjoys turning complex datasets into
                clear insights and practical solutions. With a background in
                engineering, I work across data analytics and data engineering,
                building systems that help organizations make smarter,
                data-driven decisions.
              </p>
              <p>
                At{" "}
                <span className="text-primary-400 font-medium">
                  TLX Tech Solution
                </span>
                , I work extensively with Microsoft Fabric, SQL, Python, and
                Power BI to design data workflows, develop analytical models,
                and build dashboards that translate raw data into meaningful
                business insights.
              </p>
              <p>
                I'm particularly interested in{" "}
                <span className="text-white font-medium">
                  Artificial Intelligence
                </span>{" "}
                and advanced analytics, and I'm always exploring new ways to
                solve real-world problems through data.
              </p>
              <p>
                I'm driven by curiosity and a constant focus on using data to
                solve complex problems and improve decision-making.
              </p>
            </div>
          </motion.div>

          {/* Quick info cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-dark-400">Current Role</span>
              </div>
              <p className="text-white font-medium">Data Professional</p>
              <p className="text-dark-400 text-sm">TLX Tech Solution</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-dark-400">Location</span>
              </div>
              <p className="text-white font-medium">India</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-dark-400">Education</span>
              </div>
              <p className="text-white font-medium">BTech in AI & DS</p>
              <p className="text-dark-400 text-sm">KPR Institute</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

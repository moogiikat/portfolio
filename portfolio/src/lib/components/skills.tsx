"use client";

import { motion } from "framer-motion";
import { CodeBracketIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { skills, otherSkills } from "lib/data";
import { cn } from "lib/utils";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

interface SkillBarProps {
  label: string;
  value: string;
  index: number;
  variant?: "primary" | "accent";
}

const SkillBar: React.FC<SkillBarProps> = ({ label, value, index, variant = "primary" }) => {
  const percentage = parseInt(value);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
          {label}
        </span>
        <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
          {value}%
        </span>
      </div>
      <div className="progress-modern">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ delay: index * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={cn(
            "progress-modern-fill",
            variant === "accent" && "bg-gradient-to-r from-accent to-primary"
          )}
        />
      </div>
    </motion.div>
  );
};

// Group skills by category for better visual presentation
const skillCategories = {
  frontend: skills.filter(s => 
    ["TAILWIND CSS", "CSS", "HTML", "REACT JS", "NEXT JS"].includes(s.label)
  ),
  languages: skills.filter(s => 
    ["JS", "TYPESCRIPT", "JAVA", "C++", "RUBY ON RAILS", "RAILS"].includes(s.label)
  ),
  backend: skills.filter(s => 
    ["SPRING BOOT"].includes(s.label)
  ),
};

export const Skills: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8"
    >
      {/* Section Header */}
      <motion.div custom={0} variants={fadeUpVariants} className="section-header">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
          <span className="text-gradient">スキル</span>
        </h2>
      </motion.div>

      <div className={cn("grid gap-8", "lg:grid-cols-2")}>
        {/* Coding Skills */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          className="card-modern"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <CodeBracketIcon className="w-5 h-5 text-primary" />
            </span>
            <h3 className="font-heading font-semibold text-xl text-white">
              コーディングスキル
            </h3>
          </div>
          
          <div className="space-y-5">
            {skills.map((item, idx) => (
              <SkillBar
                key={`skill-${idx}`}
                label={item.label}
                value={item.value}
                index={idx}
                variant="primary"
              />
            ))}
          </div>
        </motion.div>

        {/* Other Skills */}
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          className="card-modern"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <WrenchScrewdriverIcon className="w-5 h-5 text-accent" />
            </span>
            <h3 className="font-heading font-semibold text-xl text-white">
              その他のスキル
            </h3>
          </div>
          
          <div className="space-y-5">
            {otherSkills.map((item, idx) => (
              <SkillBar
                key={`otherSkill-${idx}`}
                label={item.label}
                value={item.value}
                index={idx}
                variant="accent"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Icons */}
      <motion.div
        custom={3}
        variants={fadeUpVariants}
        className="card-modern"
      >
        <h3 className="font-heading font-semibold text-xl text-white mb-6">
          主要技術スタック
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Nest.js",
            "PostgreSQL",
            "Git",
            "Figma",
            "Playwright",
          ].map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium",
                "bg-dark-200/80 text-zinc-300 border border-zinc-800/50",
                "hover:border-primary/50 hover:text-primary hover:bg-primary/5",
                "transition-all cursor-default"
              )}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

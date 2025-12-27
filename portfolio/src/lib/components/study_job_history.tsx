"use client";

import { motion } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { studyHistory, jobHistory } from "lib/data";
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

interface TimelineItemProps {
  item: { label: string; date: string };
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 group"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-zinc-800/30" />
      )}
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1.5 timeline-dot" />
      
      {/* Content */}
      <div className="space-y-1">
        <time className="text-sm font-medium text-primary">{item.date}</time>
        <p className="text-zinc-300 group-hover:text-white transition-colors">
          {item.label}
        </p>
      </div>
    </motion.div>
  );
};

export const StudyJobHistory: React.FC = () => {
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
          <span className="text-gradient">経歴</span>
        </h2>
      </motion.div>

      <div className={cn("grid gap-8", "lg:grid-cols-2")}>
        {/* Education */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          className="card-modern"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <AcademicCapIcon className="w-5 h-5 text-primary" />
            </span>
            <h3 className="font-heading font-semibold text-xl text-white">
              学歴
            </h3>
          </div>
          
          <div>
            {studyHistory.map((item, idx) => (
              <TimelineItem
                key={`study-${idx}`}
                item={item}
                index={idx}
                isLast={idx === studyHistory.length - 1}
              />
            ))}
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          className="card-modern"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <BriefcaseIcon className="w-5 h-5 text-accent" />
            </span>
            <h3 className="font-heading font-semibold text-xl text-white">
              職歴
            </h3>
          </div>
          
          <div>
            {jobHistory.map((item, idx) => (
              <TimelineItem
                key={`work-${idx}`}
                item={item}
                index={idx}
                isLast={idx === jobHistory.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
//
import { FBLogo, InstaLogo, GitHubLogo, LinkedInLogo } from "lib/assets/socials";
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

const infoItems = [
  { icon: EnvelopeIcon, label: "Email", value: "moogiikat0420@gmail.com", href: "mailto:moogiikat0420@gmail.com" },
  { icon: PhoneIcon, label: "Phone", value: "+81 90-5530-8007", href: "tel:+819055308007" },
  { icon: CalendarIcon, label: "Birthday", value: "1997年11月14日" },
  { icon: MapPinIcon, label: "Nationality", value: "モンゴル 🇲🇳" },
];

const hobbies = ["バスケットボール", "チェス", "旅行", "写真撮影", "コーディング"];

const socials = [
  { icon: <GitHubLogo />, href: "https://github.com/moogiikat", label: "GitHub", color: "hover:text-white" },
  { icon: <LinkedInLogo />, href: "https://www.linkedin.com/in/munkh-erdene-byambajav-71b06021b/", label: "LinkedIn", color: "hover:text-[#0077b5]" },
  { icon: <InstaLogo />, href: "https://www.instagram.com/mk_photographer24/", label: "Instagram", color: "hover:text-[#e4405f]" },
  { icon: <FBLogo />, href: "https://www.facebook.com/munkherdene.byambajav.5", label: "Facebook", color: "hover:text-[#1877f2]" },
];

export const AboutMe: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8"
    >
      {/* Section Header */}
      <motion.div custom={0} variants={fadeUpVariants} className="section-header">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white flex items-center gap-3">
          <span className="text-gradient">私について</span>
        </h2>
      </motion.div>

      <div className={cn("grid gap-8", "lg:grid-cols-5")}>
        {/* Image Card */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          className="lg:col-span-2"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-accent rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                alt="Munkh-Erdene Byambajav"
                src="/assets/home_image.jpg"
                width={600}
                height={700}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading font-bold text-2xl text-white">
                  ビャンバジャブ ムンフエルデネ
                </h3>
                <p className="text-primary text-sm mt-1">Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="lg:col-span-3 space-y-6">
          {/* Contact Info Card */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            className="card-modern"
          >
            <h3 className="font-heading font-semibold text-xl text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <EnvelopeIcon className="w-4 h-4 text-primary" />
              </span>
              連絡先
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {infoItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-dark-200/50 hover:bg-dark-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-sm text-white hover:text-primary transition-colors truncate block"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-sm text-white truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            className="card-modern"
          >
            <h3 className="font-heading font-semibold text-xl text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <SparklesIcon className="w-4 h-4 text-accent" />
              </span>
              趣味
            </h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-dark-200/80 text-sm text-zinc-300 border border-zinc-800/50 hover:border-primary/30 hover:text-primary transition-all"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            className="card-modern"
          >
            <h3 className="font-heading font-semibold text-xl text-white mb-4">
              SNS
            </h3>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className={cn(
                    "w-12 h-12 rounded-xl bg-dark-200/80 flex items-center justify-center",
                    "text-zinc-400 transition-all hover:scale-110",
                    social.color
                  )}
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

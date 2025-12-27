"use client";

import { motion } from "framer-motion";
import Link from "next/link";
//
import {
  AboutMe,
  Projects,
  SelfPr,
  Skills,
  StudyJobHistory,
} from "lib/components";
import { FBLogo, InstaLogo, GitHubLogo, LinkedInLogo } from "lib/assets/socials";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Navigation = () => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Self PR", href: "#self-pr" },
    { label: "History", href: "#history" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-heading font-bold text-xl text-gradient">
            MK
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors link-underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="mailto:moogiikat0420@gmail.com"
            className="px-4 py-2 rounded-full bg-gradient-accent text-sm font-medium text-dark-100 hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="gradient-orb gradient-orb-1 animate-float" />
      <div className="gradient-orb gradient-orb-2 animate-float-delayed" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-zinc-400"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to new opportunities
          </motion.div>
          
          <motion.h1
            custom={1}
            variants={fadeUpVariants}
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="text-gradient">ムンフエルデネ</span>
          </motion.h1>
          
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto"
          >
            Full-Stack Developer specializing in{" "}
            <span className="text-white font-medium">Next.js</span>,{" "}
            <span className="text-white font-medium">React</span>, and{" "}
            <span className="text-white font-medium">TypeScript</span>
          </motion.p>
          
          <motion.p
            custom={3}
            variants={fadeUpVariants}
            className="text-base text-zinc-500 max-w-xl mx-auto"
          >
            5年以上のウェブ開発経験を持つフルスタックエンジニア。
            日本語能力試験N1取得。
          </motion.p>
          
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <Link
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-accent text-dark-100 font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </Link>
            <Link
              href="#about"
              className="px-6 py-3 rounded-full glass glass-hover text-white font-medium"
            >
              About Me
            </Link>
          </motion.div>
          
          <motion.div
            custom={5}
            variants={fadeUpVariants}
            className="flex items-center justify-center gap-6 pt-8"
          >
            {[
              { icon: <GitHubLogo />, href: "https://github.com/moogiikat", label: "GitHub" },
              { icon: <LinkedInLogo />, href: "https://www.linkedin.com/in/munkh-erdene-byambajav-71b06021b/", label: "LinkedIn" },
              { icon: <InstaLogo />, href: "https://www.instagram.com/mk_photographer24/", label: "Instagram" },
              { icon: <FBLogo />, href: "https://www.facebook.com/munkherdene.byambajav.5", label: "Facebook" },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="text-zinc-500 hover:text-primary transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-zinc-600 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl text-gradient">MK</span>
            <span className="text-zinc-500">© 2024</span>
          </div>
          <div className="flex items-center gap-6">
            {[
              { icon: <GitHubLogo />, href: "https://github.com/moogiikat" },
              { icon: <LinkedInLogo />, href: "https://www.linkedin.com/in/munkh-erdene-byambajav-71b06021b/" },
              { icon: <InstaLogo />, href: "https://www.instagram.com/mk_photographer24/" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className="text-zinc-500 hover:text-primary transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="text-zinc-500 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-dark overflow-x-hidden">
      <Navigation />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto section-padding">
        <div className="space-y-32 py-20">
          <section id="about">
            <AboutMe />
          </section>
          
          <section id="self-pr">
            <SelfPr />
          </section>
          
          <section id="history">
            <StudyJobHistory />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

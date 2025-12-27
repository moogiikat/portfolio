"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
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

interface ProjectData {
  year: string;
  projects: {
    title: string;
    description: string;
    tech: string[];
    achievements: string[];
    images?: string[];
    link?: string;
  }[];
}

const projectsData: ProjectData[] = [
  {
    year: "2020",
    projects: [
      {
        title: "CLINIC BOARD",
        description: "医療クリニックや診療所の経営指標を即座に定量化・可視化するための経営分析ソリューションの開発",
        tech: ["Ruby", "Ruby on Rails"],
        achievements: [
          "仕事の流れは基本設計書の作成、設計書通りの画面作成、単体テストと結合テストの順で進めました",
          "画面設計書に基づいて画面を作成し、バグ修正も担当しました",
          "初めての大規模プロジェクトに参加し、多くの知識と経験を得ることができました",
        ],
        images: ["/assets/project_1.jpg", "/assets/project_2.jpg"],
      },
      {
        title: "BEER ON TAP",
        description: "日本全体でビールを購入できるウェブアプリの開発",
        tech: ["Java", "Spring Boot"],
        achievements: [
          "UI・UX を考え、ユーザーが使いやすい用なデザインを提案し画面を作成しました",
          "ユーザーからのフィードバックを積極的に収集し、機能改善や利便性の向上に取り組みました",
        ],
      },
    ],
  },
  {
    year: "2021",
    projects: [
      {
        title: "ブロックチェーン基盤Webアプリ",
        description: "ブロックチェーンを基盤としたWebアプリの開発",
        tech: ["TypeScript", "React.js", "Nest.js"],
        achievements: [
          "画面設計書通りに画面を作成し、バグ修正も行いました",
          "Puppeteerを使用してunitテストとscenarioテストを書きました",
          "ブロックチェーンに関する知識を積極的に学び、その知識をプロジェクトに活かす取り組みを行いました",
        ],
        images: ["/assets/project_3.png"],
      },
      {
        title: "Chrome拡張機能 & QRコードアプリ",
        description: "クロム（Chrome）拡張機能の開発とQRコードを読み込むアプリの開発",
        tech: ["TypeScript", "React.js", "React Native"],
        achievements: [
          "クロム拡張機能の開発を行いました",
          "GitLab CI/CD パイプライン設定を行いました",
          "クロム（Chrome）拡張機能上で表示したQRコードを読み込むスマホアプリを作成しました",
        ],
      },
    ],
  },
  {
    year: "2022",
    projects: [
      {
        title: "JICA(国際協力機構)向け業務システム",
        description: "Webアプリケーションの開発",
        tech: ["TypeScript", "Next.js", "Nest.js", "PostgreSQL"],
        achievements: [
          "日々、日本側との会議を通じてモンゴル側のチームメンバーにタスクを割り当て、仕事の内容を説明し続けました",
          "定期的にクライアントと会議を行い、新たに追加される機能について議論し、要件定義書などの作成に取り組みました",
          "Playwrightを使用して自動化テストするコードを作成しました",
        ],
        images: ["/assets/project_4.png", "/assets/project_5.png"],
      },
      {
        title: "人材紹介システム",
        description: "ポータルサイトおよび管理画面の開発とバックエンドの開発",
        tech: ["TypeScript", "Next.js", "Nest.js", "PostgreSQL"],
        achievements: [
          "5名のチームのマネジメントサポート（スケジュール管理、タスク割り当て、コードレビュー）",
          "技術選定に関する提案",
        ],
      },
    ],
  },
  {
    year: "2024",
    projects: [
      {
        title: "部屋探しウエブアプリ",
        description: "自社開発（開発中）",
        tech: ["TypeScript", "Next.js", "Nest.js", "PostgreSQL"],
        achievements: [],
      },
    ],
  },
];

const otherProjects = [
  {
    title: "Workmaster LLC LP",
    url: "https://workmaster.mn/",
  },
  {
    title: "AHCC Mongolia LP",
    url: "https://www.ahcc.mn/",
  },
];

const ProjectCard: React.FC<{ project: ProjectData["projects"][0]; index: number }> = ({
  project,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="card-modern group"
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h4 className="font-heading font-semibold text-lg text-white group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="text-zinc-500 hover:text-primary transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </Link>
          )}
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Achievements */}
        {project.achievements.length > 0 && (
          <div className="space-y-2 pt-2">
            <p className="text-xs text-zinc-500 uppercase tracking-wider">実績・取り組み</p>
            <ul className="space-y-2">
              {project.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-primary mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-2 gap-3 pt-4">
            {project.images.map((image, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg aspect-video">
                <Image
                  src={image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export function Projects() {
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
          <span className="text-gradient">プロジェクト</span>
        </h2>
      </motion.div>

      <motion.p
        custom={1}
        variants={fadeUpVariants}
        className="text-zinc-400 max-w-2xl"
      >
        5年間ほど、さまざまなプロジェクトに携わってきました。以下は主要なプロジェクトの一覧です。
      </motion.p>

      {/* Timeline */}
      <div className="space-y-16">
        {projectsData.map((yearData, yearIdx) => (
          <motion.div
            key={yearData.year}
            custom={yearIdx + 2}
            variants={fadeUpVariants}
            className="relative"
          >
            {/* Year Label */}
            <div className="sticky top-24 z-10 mb-8">
              <div className="inline-flex items-center gap-3">
                <span className="font-heading font-bold text-4xl md:text-5xl text-gradient">
                  {yearData.year}
                </span>
                <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-transparent" />
              </div>
            </div>

            {/* Projects Grid */}
            <div className={cn(
              "grid gap-6",
              yearData.projects.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-2xl"
            )}>
              {yearData.projects.map((project, projectIdx) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={projectIdx}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      <motion.div
        custom={10}
        variants={fadeUpVariants}
        className="pt-8"
      >
        <div className="card-modern">
          <h3 className="font-heading font-semibold text-xl text-white mb-6">
            その他のプロジェクト
          </h3>
          <div className="space-y-4">
            {otherProjects.map((project) => (
              <Link
                key={project.title}
                href={project.url}
                target="_blank"
                className="flex items-center justify-between p-4 rounded-xl bg-dark-200/50 hover:bg-dark-200 transition-colors group"
              >
                <span className="text-zinc-300 group-hover:text-white transition-colors">
                  {project.title}
                </span>
                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-zinc-500 group-hover:text-primary transition-colors" />
              </Link>
            ))}
            <p className="text-sm text-zinc-500 pt-2">
              その他も個人的にクロム拡張機能やウエブやスマホアプリなど開発しています。
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

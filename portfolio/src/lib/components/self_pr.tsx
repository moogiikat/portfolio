"use client";

import { motion } from "framer-motion";
import { BookOpenIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

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

const highlights = [
  "5年以上のウェブ開発経験",
  "Next.js / React / TypeScript専門",
  "大規模プロジェクトの開発リーダー経験",
  "日本語能力試験N1取得",
  "フロントエンド・バックエンド両方対応可能",
];

export const SelfPr: React.FC = () => {
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
          <span className="text-gradient">自己PR</span>
        </h2>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          className="lg:col-span-2 card-modern"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpenIcon className="w-5 h-5 text-primary" />
            </span>
            <h3 className="font-heading font-semibold text-xl text-white">
              私の経験
            </h3>
          </div>
          
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p>
              私は会社員として最初の1年間、<span className="text-white font-medium">5つのWEB開発プロジェクト</span>に参加しました。その中で、2つは大規模なプロジェクトで、Ruby on Railsを使用していました。これらのプロジェクトでは、Ruby on Rails、Spring Boot、Java、JavaScript、CSS、HTML、Vue.jsなど、さまざまなプログラミング言語を幅広く活用しました。
            </p>
            
            <p>
              その後の1年間は、<span className="text-white font-medium">ブロックチェーン関連のプロジェクト</span>にReact.js、Node.js、Nest.jsを使用して携わりました。また、日本側からの要望に応じてLP（ランディングページ）の制作も行い、フロントエンド、UI、UXの知識を高めました。さらに、単体テスト、結合テスト、シナリオテストも実施しました。
            </p>
            
            <p>
              その後は、1年間ほど<span className="text-white font-medium">Next.jsとTypeScript</span>を使用してウェブ開発を行い、Next.jsのスキルを磨きました。同時に、<span className="text-primary font-medium">JICAの大規模なプロジェクト</span>では開発リーダーと開発者として責任を持ちました。
            </p>
            
            <p>
              また、高専の卒業研究では、<span className="text-white font-medium">AIを活用した画像分析</span>に取り組みました。
            </p>
            
            <p>
              最後の3年間はバックエンドとフロントエンドの両方の経験を積んできました。また、仕事の中では常に日本語を使用し、本部の日本のスタッフと円滑なコミュニケーションを取ってきました。<span className="text-primary font-medium">日本語とフロントエンドのスキルには自信を持っています。</span>
            </p>
          </div>
        </motion.div>

        {/* Highlights Sidebar */}
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          className="lg:col-span-1"
        >
          <div className="card-modern h-full">
            <h3 className="font-heading font-semibold text-xl text-white mb-6">
              ハイライト
            </h3>
            <div className="space-y-4">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm">{highlight}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="mt-8 pt-6 border-t border-zinc-800/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-dark-200/50">
                  <p className="font-heading font-bold text-3xl text-gradient">5+</p>
                  <p className="text-xs text-zinc-500 mt-1">年の経験</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-dark-200/50">
                  <p className="font-heading font-bold text-3xl text-gradient">10+</p>
                  <p className="text-xs text-zinc-500 mt-1">プロジェクト</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

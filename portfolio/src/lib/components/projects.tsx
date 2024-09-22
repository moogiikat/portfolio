import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function Projects() {
  const data = [
    {
      title: "2020",
      content: (
        <div>
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="text-base md:text-lg font-bold">CLINIC BOARD</p>
            <p>
              医療クリニックや診療所の経営指標を即座に定量化・可視化するための経営分析ソリューションの開発
            </p>
            <p>【言語】 Ruby 【フレームワーク】 Ruby on Rails</p>
            <p className="font-bold text-sm md:text-base">実績・取り組み</p>
            <ul className="list-disc list-inside">
              <li>
                仕事の流れは基本設計書の作成、設計書通りの画面作成、単体テストと結合テストの順で進めました。
              </li>
              <li>
                画面設計書に基づいて画面を作成し、バグ修正も担当しました。
              </li>
              <li>
                初めての大規模プロジェクトに参加し、多くの知識と経験を得ることができました。
              </li>
            </ul>
          </div>
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="text-base md:text-lg font-bold">BEER ON TAP</p>
            <p>日本全体でビールを購入できるウェブアプリの開発</p>
            <p>【言語】 Java 【フレームワーク】 Spring boot</p>
            <p className="font-bold text-sm md:text-base">実績・取り組み</p>
            <ul className="list-disc list-inside">
              <li>
                UI・UX
                を考え、ユーザーが使いやすい用なデザインを提案し画面を作成しました。
              </li>
              <li>
                ユーザーからのフィードバックを積極的に収集し、機能改善や利便性の向上に取り組みました。
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/project_1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/project_2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <h1 className="text-base md:text-lg font-bold">自社製品</h1>
            <p>ブロックチェーンを基盤としたWebアプリの開発</p>
            <p>【言語】 Typescript 【フレームワーク】 React js, Nest js</p>
            <p className="font-bold text-sm md:text-base">実績・取り組み</p>
            <ul className="list-disc list-inside">
              <li>画面設計書通りに画面を作成し、バグ修正も行いました。</li>
              <li>Puppeteerを使用してunitテストとscenarioテストを書きました。</li>
              <li>
                ブロックチェーンに関する知識を積極的に学び、その知識をプロジェクトに活かす取り組みを行いました。
              </li>
            </ul>
          </div>
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="text-base md:text-lg font-bold">自社製品</p>
            <p>
              クロム（Chrome）拡張機能の開発とQRコードを読み込むアプリの開発
            </p>
            <p>【言語】 Typescript 【フレームワーク】 React js React native</p>
            <p className="font-bold text-sm md:text-base">実績・取り組み</p>
            <ul className="list-disc list-inside">
              <li>クロム拡張機能の開発を行いました。</li>
              <li>
                画面設計書に従って、使いやすくて機能的な拡張機能の画面を作成しました。
              </li>
              <li>
                技術選定において、最適なツールやライブラリの提案を行いました。
              </li>
              <li>Puppeteerを使用してunitテストとscenarioテストを書きました。</li>
              <li>GitLab CI/CD パイプライン設定を行いました。</li>
              <li>
                バグ修正を通じて、拡張機能の安定性とパフォーマンスの向上に取り組みました。
              </li>
              <li>
                クロム（Chrome）拡張機能上で表示したQRコードを読み込むスマホアプリを作成しました。
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/project_3.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="text-base md:text-lg font-bold">
              JICA(国際協力機構)向け業務システム
            </p>
            <p>Webアプリケーションの開発</p>
            <p>
              【言語】 Typescript 【フレームワーク】 Next JS Nest JS【DB】
              Postgresql
            </p>
            <p className="font-bold text-sm md:text-base">実績・取り組み</p>
            <ul className="list-disc list-inside">
              <li>
                日々、日本側との会議を通じてモンゴル側のチームメンバーにタスクを割り当て、仕事の内容を説明し続けました。
              </li>
              <li>
                定期的にクライアントと会議を行い、新たに追加される機能について議論し、要件定義書などの作成に取り組みました。
              </li>
              <li>
                チームメンバーのスケジュール管理やタスクの進行状況確認に努め、プロジェクトの進捗をサポートしました。
              </li>
              <li>
                技術選定において、最適なツールやフレームワークの提案を行い、プロジェクトの成功に貢献しました。
              </li>
              <li>playwrightを使用して自動化テストするコードを作成しました。</li>
            </ul>
          </div>
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="text-base md:text-lg font-bold">自社開発</p>
            <p>人材紹介システム</p>
            <p>
              【言語】Typescript 【フレームワーク】 Next JS、Nest JS 【DB】
              Postgresql
            </p>
            <p className="font-bold text-sm md:text-base">実績・取り組み</p>
            <ul className="list-disc list-inside">
              <li>ポータルサイトおよび管理画面の開発とバックエンドの開発</li>
              <li>5名のチームのマネジメントサポート（スケジュール管理、タスク割り当て、コードレビュー）</li>
              <li>技術選定に関する提案</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/project_4.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/project_5.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="text-base md:text-lg font-bold">自社開発（開発中）</p>
            <p>部屋探しウエブアプリ</p>
            <p>
              【言語】 Typescript 【フレームワーク】 Next JS Nest JS 【DB】
              Postgresql
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "OTHER",
      content: (
        <div>
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="text-base md:text-lg font-bold">Workmaster LLC LP</p>
            <p>
              <a
                href="https://workmaster.mn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://workmaster.mn/
              </a>
            </p>
            <p className="text-base md:text-lg font-bold mt-4">
              AHCC Mongolia LP
            </p>
            <p>
              <a
                href="https://www.ahcc.mn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://www.ahcc.mn/
              </a>
            </p>
            <p className="text-base md:text-lg font-bold mt-4">
              その他もクロム拡張機能やウエブやスマホアプリなど開発しています。
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

// import { Square2StackIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
// //
// import { projects } from "lib/data";
// import { cn } from "lib/utils";

// export const Projects: React.FC = () => {
//   return (
//     <div className="flex flex-col gap-y-5 text-white">
//       <div className="flex">
//         <Square2StackIcon width={30} className="text-primary" />
//         <h1 className="text-white text-2xl pl-4 p-2 font-bold">
//           今までの参加プロジェクト
//         </h1>
//       </div>
//       <div className={cn("grid gap-y-5", "lg:gap-x-5 lg:grid-cols-3")}>
//         .map((item, idx) => {
//           return (
//             <div className="card w-full bg-gray-800 shadow-xl" key={idx}>
//               <figure>
//                 <img src={item.image} alt={item.label} />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title">{item.label}</h2>
//                 <p>{item.body}</p>
//                 <div className="card-actions justify-end">
//                   <Link href={item.url} target="_blank">
//                     <button className="btn btn-primary">サイトへ</button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

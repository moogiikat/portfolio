import Image from "next/image";
import Link from "next/link";

//
import { FBLogo, InstaLogo } from "lib/assets/socials";
import { tableData, skills, studyHistory, jobHistory } from "lib/data";
import { classNames } from "lib/utils";

export default function Home() {
  return (
    <div className="mockup-window border bg-base-300">
      <div
        className={classNames(
          "flex flex-col justify-center px-4 py-16 bg-base-200 gap-y-10",
          "lg:px-20"
        )}
      >
        <div
          className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}
        >
          <Image
            alt="image"
            src={"/assets/home_image.jpg"}
            width={1000}
            height={1000}
            className="w-full h-full rounded"
          ></Image>
          <div className="overflow-x-auto">
            <h1 className="text-white text-2xl pl-4 border border-x-0 border-t-0 p-2 font-bold">
              私について
            </h1>
            <table className="table text-white">
              <tbody>
                {tableData.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <th className="whitespace-nowrap">{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  );
                })}
                <tr key={"sns"}>
                  <th className="whitespace-nowrap">{"SNS:"}</th>
                  <td className="flex gap-x-5">
                    <Link
                      href={"https://www.facebook.com/munkherdene.byambajav.5"}
                    >
                      <FBLogo />
                    </Link>
                    <Link href={"https://www.instagram.com/mk_photographer24/"}>
                      <InstaLogo />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="py-5">
              <button className="btn btn-primary">CVをダウンロード</button>
            </div>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold">自己PR</h1>
          私は会社員として最初の1年間、5つのWEB開発プロジェクトに参加しました。その中で、2つは大規模なプロジェクトで、Ruby
          on Railsを使用していました。これらのプロジェクトでは、Ruby on
          Rails、Spring Boot、Java、JavaScript、CSS、HTML、Vue.js
          など、さまざまなプログラミング言語を幅広く活用しました。
          その後の1年間は、ブロックチェーン関連のプロジェクトにReact.js、Node.js、Nest.jsを使用して携わりました。また、日本側からの要望に応じてLP（ランディングページ）の制作も行い、フロントエンド、UI、UXの知識を高めました。さらに、単体テスト、結合テスト、シナリオテストも実施しました。
          その後は、1年間ほどNext.jsとTypeScriptを使用してウェブ開発を行い、Next.jsのスキルを磨きました。同時に、JICAの大規模なプロジェクトでは開発リーダーと開発者として責任を持ちました。
          また、高専の卒業研究では、AIを活用した画像分析に取り組みました。
          最後の3年間はバックエンドとフロントエンドの両方の経験を積んできました。また、仕事の中では常に日本語を使用し、本部の日本のスタッフと円滑なコミュニケーションを取ってきました。日本語とフロントエンドのスキルには自信を持っています。これからは日本に行き、これまでの仕事の経験を活かして活躍したいと思っています。
        </div>
        <div
          className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}
        >
          <div className="flex flex-col gap-y-5">
            <h1 className="text-2xl text-white font-bold">学歴</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {studyHistory.map((item, idx) => {
                return (
                  <li className="mb-10 ml-4" key={`study-${idx}`}>
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {item.date}
                    </time>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="text-2xl text-white font-bold">職歴</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {jobHistory.map((item, idx) => {
                return (
                  <li className="mb-10 ml-4" key={`work-${idx}`}>
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {item.date}
                    </time>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 text-white">
          <h1 className="text-2xl font-bold">スキル</h1>
          <div
            className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}
          >
            {skills.map((item, idx) => {
              return (
                <div className="flex flex-col gap-y-2" key={`skill-${idx}`}>
                  <p>{item.label}</p>
                  <progress
                    className="progress progress-info w-full bg-gray-200 h-5"
                    value={item.value}
                    max="100"
                  ></progress>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

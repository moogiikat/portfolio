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
          "lg:px-16"
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
            <h1 className="text-white text-2xl pl-4 border border-x-0 border-t-0 p-2">
              私について
            </h1>
            <table className="table text-white">
              <tbody>
                {tableData.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <th>{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pl-4 text-white flex gap-x-4">
              <p>SNS:</p>
              <Link href={"https://www.facebook.com/munkherdene.byambajav.5"}>
                <FBLogo />
              </Link>
              <Link href={"https://www.instagram.com/mk_photographer24/"}>
                <InstaLogo />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}
        >
          <div className="flex flex-col gap-y-5">
            <h1 className="text-2xl text-white">学歴</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {studyHistory.map((item) => {
                return (
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {item.date}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="text-2xl text-white">職歴</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {jobHistory.map((item) => {
                return (
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {item.date}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 text-white">
          <h1 className="text-2xl">スキル</h1>
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

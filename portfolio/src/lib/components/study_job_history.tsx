import { studyHistory, jobHistory } from "lib/data";
import { classNames } from "lib/utils";

export const StudyJobHistory: React.FC = () => {
  return (
    <div className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}>
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
  );
};

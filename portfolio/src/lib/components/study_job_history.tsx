import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { studyHistory, jobHistory } from "lib/data";
import { cn } from "lib/utils";

export const StudyJobHistory: React.FC = () => {
  return (
    <div className={cn("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}>
      <div className="flex flex-col gap-y-5">
        <div className="flex">
          <AcademicCapIcon width={30} className="text-primary" />
          <h1 className="text-white text-2xl pl-4 p-2 font-bold">学歴</h1>
        </div>
        <ol className="relative border-l border-gray-200">
          {studyHistory.map((item, idx) => {
            return (
              <li className="mb-10 ml-4" key={`study-${idx}`}>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                  {item.date}
                </time>
                <h3 className="font-semibold text-white">{item.label}</h3>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex">
          <BriefcaseIcon width={30} className="text-primary" />
          <h1 className="text-white text-2xl pl-4 p-2 font-bold">職歴</h1>
        </div>
        <ol className="relative border-l border-gray-200">
          {jobHistory.map((item, idx) => {
            return (
              <li className="mb-10 ml-4" key={`work-${idx}`}>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                  {item.date}
                </time>
                <h3 className="font-semibold text-white">{item.label}</h3>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

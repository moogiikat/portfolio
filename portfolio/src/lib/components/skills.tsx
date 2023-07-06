import { TicketIcon } from "@heroicons/react/24/outline";
import { skills, otherSkills } from "lib/data";
import { classNames } from "lib/utils";

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 text-white">
      <div className="flex">
        <TicketIcon width={30} className="text-primary" />
        <h1 className="text-white text-2xl pl-4 p-2 font-bold">スキル</h1>
      </div>
      <div className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}>
        <div className={classNames("lg:col-span-1")}>
          <h1 className="pb-5 text-xl font-bold">コーディングスキル</h1>
          {skills.map((item, idx) => {
            return (
              <div className="flex flex-col gap-y-2" key={`skill-${idx}`}>
                <p>{item.label}</p>
                <progress
                  className="progress progress-info w-full h-3"
                  value={item.value}
                  max="100"
                ></progress>
              </div>
            );
          })}
        </div>
        <div className={classNames("lg:col-span-1")}>
          <h1 className="pb-5 text-xl font-bold">その他のスキル</h1>
          {otherSkills.map((item, idx) => {
            return (
              <div className="flex flex-col gap-y-2" key={`otherSkill-${idx}`}>
                <p>{item.label}</p>
                <progress
                  className="progress progress-accent w-full h-3"
                  value={item.value}
                  max="100"
                ></progress>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

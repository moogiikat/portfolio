import { skills } from "lib/data";
import { classNames } from "lib/utils";

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 text-white">
      <h1 className="text-2xl font-bold">スキル</h1>
      <div className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}>
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
      {/* <h1 className="text-2xl font-bold">言語レベル</h1> */}
    </div>
  );
};

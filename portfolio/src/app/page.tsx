import { classNames } from "lib/utils";
//
import {
  AboutMe,
  Projects,
  SelfPr,
  Skills,
  StudyJobHistory,
} from "lib/components";

export default function Home() {
  return (
    <div className="mockup-window border bg-base-300">
      <div
        className={classNames(
          "flex flex-col justify-center px-4 py-16 bg-base-200 gap-y-10",
          "lg:px-32"
        )}
      >
        <AboutMe />
        <SelfPr />
        <StudyJobHistory />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

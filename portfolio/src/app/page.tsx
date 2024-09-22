import { cn } from "lib/utils";
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
    <div className="mockup-window border bg-gray-900">
      <div
        className={cn(
          "flex flex-col justify-center px-4 py-16 gap-y-10 max-w-[1000px] mx-auto",
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

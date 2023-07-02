import { classNames } from "lib/utils";

export default function Home() {
  return (
    <div className="mockup-window border bg-base-300">
      <div className="flex justify-center px-4 py-16 bg-base-200">
        <div className={classNames("grid", "lg:grid-cols-2")}>
          <img src={"/assets/home_image.jpg"} className="w-full h-full"></img>
        </div>
      </div>
    </div>
  );
}

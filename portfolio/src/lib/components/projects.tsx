import { Square2StackIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
//
import { projects } from "lib/data";
import { classNames } from "lib/utils";

export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 text-white">
      <div className="flex">
        <Square2StackIcon width={30} className="text-primary" />
        <h1 className="text-white text-2xl pl-4 p-2 font-bold">
          今までのプロジェクト
        </h1>
      </div>
      <div className={classNames("grid gap-y-5", "lg:gap-x-5 lg:grid-cols-3")}>
        {projects.map((item, idx) => {
          return (
            <div className="card w-full bg-gray-800 shadow-xl" key={idx}>
              <figure>
                <img src={item.image} alt={item.label} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.label}</h2>
                <p>{item.body}</p>
                <div className="card-actions justify-end">
                  <Link href={item.url} target="_blank">
                    <button className="btn btn-primary">サイトへ</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import Link from "next/link";
//
import { projects } from "lib/data";
import { classNames } from "lib/utils";

export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 text-white">
      <h1 className="text-2xl font-bold">今までのプロジェクト</h1>
      <div className="stats bg-gray-800">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="/assets/home_image.jpg" />
              </div>
            </div>
          </div>
          <div className="stat-value text-white">プロジェクト</div>
          <div className="stat-title text-white">
            参加済みなプロジェクトは10個
          </div>
          <div className="stat-desc text-secondary">
            現在参加しているプロジェクトは2個
          </div>
        </div>
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
                  <Link href={item.url}>
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

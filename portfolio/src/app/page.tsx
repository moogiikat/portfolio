import { classNames } from "lib/utils";

export default function Home() {
  return (
    <div className="mockup-window border bg-base-300">
      <div className="flex flex-col justify-center px-4 py-16 bg-base-200 gap-y-10">
        <div
          className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}
        >
          <img
            src={"/assets/home_image.jpg"}
            className="w-full h-full rounded"
          ></img>
          <div className="overflow-x-auto">
            <h1 className="text-white text-2xl pl-5 border border-x-0 border-t-0 p-2">
              私について
            </h1>
            <table className="table text-white">
              <tbody>
                {tableData.map((item) => {
                  return (
                    <tr>
                      <th>{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 text-white">
          <h1 className="text-2xl">スキル</h1>
          <div
            className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}
          >
            <div className="flex flex-col gap-y-5">
              {skills.map((item) => {
                return (
                  <div className="flex flex-col gap-y-2">
                    <p>{item.label}</p>
                    <progress
                      className="progress progress-info w-full bg-gray-200"
                      value={item.value}
                      max="100"
                    ></progress>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-y-5">
              {skills.map((item) => {
                return (
                  <div className="flex flex-col gap-y-2">
                    <p>{item.label}</p>
                    <progress
                      className="progress progress-info w-full bg-gray-200"
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
    </div>
  );
}

const tableData = [
  { label: "名前", value: "ビャンバジャブ ムンフエルデネ" },
  { label: "メール", value: "monkhoo1997ts@gmail.com" },
  { label: "電話番号", value: "+97691118058" },
  { label: "誕生日", value: "1997年11月14日" },
  { label: "国籍", value: "モンゴル" },
  {
    label: "趣味",
    value: "バスケットボール、チェス、旅行、写真撮影、コーディング",
  },
];

const skills = [
  { label: "css", value: "90" },
  { label: "html", value: "90" },
];

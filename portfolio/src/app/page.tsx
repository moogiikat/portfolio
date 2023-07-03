import Image from "next/image";
import Link from "next/link";

//
import { FBLogo, InstaLogo } from "lib/assets/socials";
import { classNames } from "lib/utils";

export default function Home() {
  return (
    <div className="mockup-window border bg-base-300">
      <div
        className={classNames(
          "flex flex-col justify-center px-4 py-16 bg-base-200 gap-y-10",
          "lg:px-16"
        )}
      >
        <div
          className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}
        >
          <Image
            alt="image"
            src={"/assets/home_image.jpg"}
            width={1000}
            height={1000}
            className="w-full h-full rounded"
          ></Image>
          <div className="overflow-x-auto">
            <h1 className="text-white text-2xl pl-4 border border-x-0 border-t-0 p-2">
              私について
            </h1>
            <table className="table text-white">
              <tbody>
                {tableData.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <th>{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pl-4 text-white flex gap-x-4">
              <p>SNS:</p>
              <Link href={"https://www.facebook.com/munkherdene.byambajav.5"}>
                <FBLogo />
              </Link>
              <Link href={"https://www.instagram.com/mk_photographer24/"}>
                <InstaLogo />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 text-white">
          <h1 className="text-2xl">スキル</h1>
          <div
            className={classNames("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}
          >
            {skills.map((item, idx) => {
              return (
                <div className="flex flex-col gap-y-2" key={`skill-${idx}`}>
                  <p>{item.label}</p>
                  <progress
                    className="progress progress-info w-full bg-gray-200 h-5"
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
  { label: "CSS", value: "90" },
  { label: "HTML", value: "90" },
  { label: "TAILWIND CSS", value: "100" },
  { label: "JS", value: "90" },
  { label: "C++", value: "40" },
  { label: "REACT JS", value: "80" },
  { label: "NEXT JS", value: "90" },
  { label: "TYPESCRIPT", value: "90" },
  { label: "RUBY ON RAILS", value: "40" },
  { label: "RAILS", value: "40" },
  { label: "FIGMA", value: "70" },
  { label: "GIHUB", value: "100" },
  { label: "GITLUB", value: "70" },
  { label: "JAVA", value: "40" },
  { label: "SPRING BOOT", value: "50" },
];

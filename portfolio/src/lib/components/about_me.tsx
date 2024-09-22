import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
//
import { FBLogo, InstaLogo, GitHubLogo, LinkedInLogo } from "lib/assets/socials";
import { tableData } from "lib/data";
import { cn } from "lib/utils";

export const AboutMe: React.FC = () => {
  return (
    <div className={cn("grid gap-y-5", "lg:grid-cols-2 lg:gap-x-10")}>
      <Image
        alt="image"
        src={"/assets/home_image.jpg"}
        width={1000}
        height={1000}
        className="w-full h-full rounded"
      />
      <div className="overflow-x-auto">
        <div className="flex border border-x-0 border-t-0">
          <UserCircleIcon width={30} className="text-primary" />
          <h1 className="text-white text-2xl pl-4 p-2 font-bold">私について</h1>
        </div>

        <table className="table text-white">
          <tbody>
            {tableData.map((item, idx) => {
              return (
                <tr key={idx} className="border-none">
                  <th className="whitespace-nowrap">{item.label}</th>
                  <td>{item.value}</td>
                </tr>
              );
            })}
            <tr key={"sns"}>
              <th className="whitespace-nowrap">{"SNS:"}</th>
              <td className="flex gap-x-5">
                <Link href={"https://www.facebook.com/munkherdene.byambajav.5"}>
                  <FBLogo />
                </Link>
                <Link href={"https://www.instagram.com/mk_photographer24/"}>
                  <InstaLogo />
                </Link>
                <Link href={"https://github.com/moogiikat"}>
                  <GitHubLogo />
                </Link>
                <Link href={"https://www.linkedin.com/in/munkh-erdene-byambajav-71b06021b/"}>
                  <LinkedInLogo />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="py-5">
          <a
            href="https://www.r-agent.com/guide/wp-content/uploads/2021/07/1_kourousyourirekisyo.pdf"
            className="btn btn-primary animate-pulse"
            target={"_blank"}
          >
            CVをダウンロード
          </a>
        </div> */}
      </div>
    </div>
  );
};

import { BookOpenIcon } from "@heroicons/react/24/outline";
export const SelfPr: React.FC = () => {
  return (
    <div className="text-white">
      <div className="flex">
        <BookOpenIcon width={30} className="text-primary" />
        <h1 className="text-white text-2xl pl-4 p-2 font-bold">自己PR</h1>
      </div>
      <p className="whitespace-pre-wrap">{`私は会社員として最初の1年間、5つのWEB開発プロジェクトに参加しました。その中で、2つは大規模なプロジェクトで、Ruby on Railsを使用していました。これらのプロジェクトでは、Ruby on Rails、Spring Boot、Java、JavaScript、CSS、HTML、Vue.js など、さまざまなプログラミング言語を幅広く活用しました。\n\nその後の1年間は、ブロックチェーン関連のプロジェクトにReact.js、Node.js、Nest.jsを使用して携わりました。また、日本側からの要望に応じてLP（ランディングページ）の制作も行い、フロントエンド、UI、UXの知識を高めました。さらに、単体テスト、結合テスト、シナリオテストも実施しました。 その後は、1年間ほどNext.jsとTypeScriptを使用してウェブ開発を行い、Next.jsのスキルを磨きました。同時に、JICAの大規模なプロジェクトでは開発リーダーと開発者として責任を持ちました。\n\nまた、高専の卒業研究では、AIを活用した画像分析に取り組みました。\n\n最後の3年間はバックエンドとフロントエンドの両方の経験を積んできました。また、仕事の中では常に日本語を使用し、本部の日本のスタッフと円滑なコミュニケーションを取ってきました。日本語とフロントエンドのスキルには自信を持っています。`}</p>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import BodyText from "./BodyText";
import Heading from "./Heading";
import icon from "../assets/img/icon.jpg";
import Button from "./Button";

const HomePage = () => {
  return (
    <div className="">
      <h2 className="text-4xl font-bold secondary-font">Yamato Handai</h2>
      <p className="mt-1">(Coder/Basket man)</p>
      <img className="mt-2 w-24 max-w-xs rounded-xl" src={icon} alt="アイコン" />
      <Heading title={"About"} />
      <BodyText
        text={
          "現在WEBコーダーとして株式会社CRMラボで仕事をしています。コーディング業務はもちろん、ECサイトの運営代行にも携わっており、楽天やShopifyをはじめとする様々なカートシステムを用いて、販促の企画や商品編集、デザインの修正など幅広く業務をしています。"
        }
      />
      <br></br>
      <BodyText
        text={
          "私は将来の展望として、フロントエンドエンジニアとしてモダンな技術を用いて仕事をしたい！という思いがあります。"
        }
      />
      <BodyText
        text={
          "最近で言うところの、ReactやVue.jsなどJavaScriptのフレームワークやライブラリを使って、”おしゃれ” で ”かわいい（カッコいい）” サイトやWEBアプリを開発したいという夢です。"
        }
      />
      <br></br>
      <BodyText text={"本サイトに私がこれまで制作したWEBサイトなどを記録していきます。いつか、過去の制作物のソースコードを確認した時に「なんだこのクソコードは！」と思えるように、エンジニアとして成長できるようになりたいと思います。"} />

      <div>
        <Heading title={"Bio"} />
        <BodyText text={"1998年 宮崎県生まれ"}></BodyText>
        <BodyText text={"2017年 宮崎県立都城農業高等学校卒業"}></BodyText>
        <BodyText text={"2017年 農林水産省近畿農政局入省"}></BodyText>
        <BodyText text={"2022年〜現在 株式会社CRMラボ"}></BodyText>
      </div>

      <div>
        <Heading title={"Patime"} />
        <BodyText text={"バスケ、ガジェット集め、グルメ巡り、ゲーム(fps)"} />
      </div>

      <div>
        <Heading title={"Skils"} />
        <div className="block sm:flex items-center gap-4">
          <p className="w-2/12 font-semibold text-lg">
            {"【"}Markup{"】"}
          </p>
          <p>HTML, CSS, Tailwind CSS</p>
        </div>
        <div className="block sm:flex items-center gap-4 mt-3">
          <p className="w-2/12 font-semibold text-lg">
            {"【"}FrontEnd{"】"}
          </p>
          <p>JavaScript, Sass, gulp, React(a little...)</p>
        </div>
        <div className="block sm:flex items-center gap-4 mt-3 mb-6">
          <p className="w-2/12 font-semibold text-lg">
            {"【"}Others{"】"}
          </p>
          <p>git, npm</p>
        </div>

        <Link className="no-underline" to="/works">
          <Button text={"My Portfolio >"} />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

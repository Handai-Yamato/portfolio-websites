import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/img/icon.jpg";
import Button from "./Button";
import styled from "styled-components";
import { sm } from "./media";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.8,
        }}
      >
        <HomeName>Yamato Handai</HomeName>
        <p className="mt-1">(Coder / Basket man)</p>
        <HomeIcon src={icon} alt="アイコン" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.8,
        }}
      >
        <h2>About</h2>
        <p>
          現在<a href="https://crmlab.jp/" target={"blank"}>株式会社CRMラボ</a>でWEBコーダーとして働いています。コーディング業務はもちろん、ECサイトの運営代行にも携わっており、楽天やShopifyをはじめとする様々なカートシステムを用いて、販促の企画や商品編集、デザインの修正など幅広く業務をしています。
        </p>
        <br></br>
        <p>
          元々、高校卒業後に農林水産省へ入り、土木技術を専門とした仕事に携わっていました。安定した給料で福利厚生も良かったのですが、仕事自体をあまり好きにはなれず、何か自分にあった職業はないか探す日々を送っていました。
        </p>
        <p>
          色々な職業を探すうちに、WEBエンジニアという仕事を知り、独学で勉強をはじめました。飽きっぽい性格なのですが、コードを書いている間は夢中になることができ、これが天職かも！？と感じ、現在の会社に入社することとなりました。
        </p>
        <br></br>
        <p>
          私はフロントエンドエンジニアとしてモダンな技術を用いて仕事をしたい！という目標があり、現在Next.jsの勉強をしています。Next.jsとよく比べられるものにVue.js系のNuxt.jsがありますが、Youtubeやその他プラットホームの動画教材やネット上にある技術記事の多さと
          <a href="https://qiita.com/dtakkiy/items/7d79c153860fbda102a7" target={"blank"}>
            トレンド
          </a>
          を考慮して、まずはNext.jsを学ぶことにしました。
        </p>
        <br></br>
        <p>
          本サイトにつくったWEBサイトを載せていこうと思います。どれも制作物と呼べるほどのものでは無いのですが、自分のエンジニアとしての成長記録を残せればいいなと考えています。
        </p>
      </motion.div>
      <br></br>

      <motion.div
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.8,
        }}
      >
        <div>
          <h2>Bio</h2>
          <p>1998年 宮崎県生まれ</p>
          <p>2017年 宮崎県立都城農業高等学校卒業</p>
          <p>2017年 農林水産省近畿農政局入省</p>
          <p>2022年〜現在 株式会社CRMラボ</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.8,
        }}
      >
        <div>
          <h2>Pastime</h2>
          <p>バスケ、ガジェット集め、グルメ巡り、ゲーム(fps)</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.8,
        }}
      >
        <div>
          <h2>Skills</h2>
          <SkillsContent>
            <SkillsTitle>
              {"【"}Markup{"】"}
            </SkillsTitle>
            <SkillsText>HTML, CSS(Sass), Tailwind CSS</SkillsText>
          </SkillsContent>
          <SkillsContent>
            <SkillsTitle>
              {"【"}FrontEnd{"】"}
            </SkillsTitle>
            <SkillsText>JavaScript, gulp, React(a little...)</SkillsText>
          </SkillsContent>
          <SkillsContent>
            <SkillsTitle>
              {"【"}Others{"】"}
            </SkillsTitle>
            <SkillsText>git, npm</SkillsText>
          </SkillsContent>

          <PortfolioLink to="/works">
            <Button text={"My Portfolio >"} />
          </PortfolioLink>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;

const HomeName = styled.div`
  font-size: 36px;
  font-weight: 700;
  font-family: "M PLUS Rounded 1c", sans-serif;
`;

const HomeIcon = styled.img`
  margin-top: 8px;
  width: 96px;
  border-radius: 12px;
`;

const SkillsContent = styled.div`
  display: block;
  margin-top: 8px;

  ${sm`
        display: flex;
        align-items: center;
    `}
`;

const SkillsText = styled.p`
  margin-left: 8px;

  ${sm`
    margin-top: 0;
  `}
`;

const SkillsTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const PortfolioLink = styled(Link)`
  display: inline-block;
  margin-top: 16px;
`;

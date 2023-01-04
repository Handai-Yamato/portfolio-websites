import React from "react";
import icon from "../assets/img/icon.jpg";
import Button from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { sm } from "./media";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.4,
    },
  },
};

const HomePage = () => {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <HomeName>Yamato Handai</HomeName>
      <p className="mt-1">(Coder / Basket man)</p>
      <HomeIcon src={icon} alt="アイコン" />

      <div>
        <h2>About</h2>
      </div>
      <p>
        現在
        <a href="https://crmlab.jp/" target={"blank"}>
          株式会社CRMラボ
        </a>
        でWEBコーダーとして働いています。コーディング業務をはじめ、ECサイトの運営代行にも携わっており、楽天やShopifyをはじめとする様々なカートシステムを用いて、販促の企画や商品編集、WEBページの修正など幅広い業務に携わっています。
      </p>
      <br></br>
      <p>
        元々、高校卒業後に農林水産省へ入り、土木技術を専門とした仕事に携わっていました。安定した給料で福利厚生も良かったのですが、仕事自体をあまり好きにはなれず、何か自分にあった職業はないかと転職先を探す日々を送っていました。
      </p>
      <p>
        WEBエンジニアという仕事を知って独学をはじめてから、これが天職かも！？と感じたため、転職し現在の会社に入社しました。
      </p>
      <br></br>
      <p>
        現在はフロントエンドエンジニアとしてモダンな技術を用いて開発をしたい！と考えるようになり、React（Next.js）の勉強をしています。
      </p>
      <br></br>

      <div>
        <h2>Bio</h2>
        <p>1998年 宮崎県生まれ</p>
        <p>2017年 宮崎県立都城農業高等学校卒業</p>
        <p>2017年 農林水産省近畿農政局入省</p>
        <p>2022年 〜 現在 株式会社CRMラボ</p>
      </div>

      <div>
        <h2>Pastime</h2>
        <p>
          バスケ、<Link to="/uses">ガジェット集め</Link>、
          <a href="https://www.secure.instagram.com/">グルメ巡り</a>、ゲーム(fps)
        </p>
      </div>

      <div>
        <h2>Skills</h2>
        <SkillsContent>
          <SkillsTitle>
            {"<"}Markup{">"}
          </SkillsTitle>
          <SkillsText>HTML, CSS(Sass, Tailwind CSS)</SkillsText>
        </SkillsContent>
        <SkillsContent>
          <SkillsTitle>
            {"<"}FrontEnd{">"}
          </SkillsTitle>
          <SkillsText>JavaScript, gulp, React(Next.js)</SkillsText>
        </SkillsContent>
        <SkillsContent>
          <SkillsTitle>
            {"<"}Others{">"}
          </SkillsTitle>
          <SkillsText>git(GitHub), npm</SkillsText>
        </SkillsContent>
        <SkillsContent>
          <SkillsTitle>
            {"<"}Still... {">"}
          </SkillsTitle>
          <SkillsText>TypeScript</SkillsText>
        </SkillsContent>

        <PortfolioLink to="/works">
          <Button text={"My Portfolio >"} />
        </PortfolioLink>
      </div>
    </motion.div>
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
  font-weight: 700;
  font-size: 16px;
`;

const PortfolioLink = styled(Link)`
  display: inline-block;
  margin-top: 16px;
`;

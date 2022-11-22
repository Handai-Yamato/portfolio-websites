import React from "react";
import ChatbotImage from "../assets/img/image_chatbotapp.png";
import KyonokaigobinImage from "../assets/img/image_kyonokaigobin.png";
import TypingGameImage from "../assets/img/image_typinggame.png";
import PortfolioImage from "../assets/img/image_portfolio.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { sm } from "./media";

const WorksPage = () => {
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
        <h2>Works</h2>
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
          <a href="https://my-portfolio-6ae05.web.app" target={"blank"}>
            <WorksImage src={PortfolioImage} alt="" />
          </a>
          <div className="">
            <WorksTitle>My Portfolio</WorksTitle>
            <WorksText>
              ポートフォリオをReactでつくりました。この規模のサイトならReactでなくても良かったのですが、SPAをつくったことが無かったので、挑戦してみました。CSSはstyled-componentsを使用しています。
              <br></br>はじめはTailwind
              CSSでつくっていたのですが、ユーティリティファーストのCSS設計に慣れなかったのと、CSS in
              JSの勉強も兼ねてstyled-componentsに切り替えました(ゆくゆくはEmotionでも開発したい)。
            </WorksText>
            <WorksList>
              <WorksItem>
                <LinkHead>WEBSITE</LinkHead>
                <LinkText>
                  <a href="https://my-portfolio-6ae05.web.app">
                  https://my-portfolio-6ae05.web.app
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>SOURCE</LinkHead>
                <LinkText>
                  <a href="https://github.com/Handai-Yamato/portfolio-websites" target={"blank"}>
                    https://github.com/Handai-Yamato/portfolio-websites
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>STACK</LinkHead>
                <LinkText>React, Framer motion, Firebase(Hosting)</LinkText>
              </WorksItem>
            </WorksList>
          </div>
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
        <WorkContainer>
          <a href="https://chatbot-app-acbf8.web.app/" target={"blank"}>
            <WorksImage src={ChatbotImage} alt="" />
          </a>
          <div>
            <WorksTitle>Chatobot App</WorksTitle>
            <WorksText>
              チャットボット形式で私のことについて質問できます。ReactとFirebase、MUIの学習のためにつくりました。
            </WorksText>
            <WorksList>
              <WorksItem>
                <LinkHead>WEBSITE</LinkHead>
                <LinkText>
                  <a href="https://chatbot-app-acbf8.web.app/" target={"blank"}>
                    https://chatbot-app-acbf8.web.app/
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>SOURCE</LinkHead>
                <LinkText>
                  <a href="https://github.com/Handai-Yamato/chatbot-app" target={"blank"}>
                    https://github.com/Handai-Yamato/chatbot-app
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>STACK</LinkHead>
                <LinkText>React, MUI, Firebase(Hosting)</LinkText>
              </WorksItem>
            </WorksList>
          </div>
        </WorkContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.8,
        }}
      >
        <WorkContainer>
          <a href="https://handai-yamato.github.io/kyono-kaigobin-training/" target={"blank"}>
            <WorksImage src={KyonokaigobinImage} alt="" />
          </a>
          <div className="">
            <WorksTitle>京の介護便 / 楽天Topページ</WorksTitle>
            <WorksText>”京の介護便”のサイトを模写コーディングしました。</WorksText>
            <WorksList>
              <WorksItem>
                <LinkHead>WEBSITE</LinkHead>
                <LinkText>
                  <a
                    href="https://handai-yamato.github.io/kyono-kaigobin-training/"
                    target={"blank"}
                  >
                    https://handai-yamato.github.io/kyono-kaigobin-training/
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>SOURCE</LinkHead>
                <LinkText>
                  <a
                    href="https://github.com/Handai-Yamato/kyono-kaigobin-training"
                    target={"blank"}
                  >
                    https://github.com/Handai-Yamato/kyono-kaigobin-training
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>STACK</LinkHead>
                <LinkText>HTML, CSS, Sass, gulp,</LinkText>
              </WorksItem>
            </WorksList>
          </div>
        </WorkContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.8,
        }}
      >
        <WorkContainer>
          <a href="https://handai-yamato.github.io/typing-game-app/">
            <WorksImage src={TypingGameImage} alt="" />
          </a>
          <div>
            <WorksTitle>Typing Game</WorksTitle>
            <WorksText>
              寿○打風のタイピングゲームです。APIをたたく学習を兼ねてつくりました。
            </WorksText>
            <WorksList>
              <WorksItem>
                <LinkHead>WEBSITE</LinkHead>
                <LinkText>
                  <a href="https://handai-yamato.github.io/typing-game-app/" target={"blank"}>
                    https://handai-yamato.github.io/typing-game-app/
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>SOURCE</LinkHead>
                <LinkText>
                  <a href="https://github.com/Handai-Yamato/typing-game-app" target={"blank"}>
                    https://github.com/Handai-Yamato/typing-game-app
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>STACK</LinkHead>
                <LinkText>HTML, CSS, JavaScript(Vanilla)</LinkText>
              </WorksItem>
            </WorksList>
          </div>
        </WorkContainer>
      </motion.div>
    </div>
  );
};

export default WorksPage;

const WorkContainer = styled.div`
  margin-top: 56px;
`;

const WorksImage = styled.img`
  width: 100%;
  border-radius: 6px;
  border: 2px solid rgb(243 244 246);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    scale: 1.05;
  }
`;

const WorksTitle = styled.h3`
  margin-top: 16px;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const WorksText = styled.p`
  margin-top: 8px;
`;

const WorksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const WorksItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${sm`
        display: block;
    `}
`;

const LinkHead = styled.a`
  padding: 4px;
  color: rgb(187 247 208);
  background-color: rgb(74 222 128 / 0.1);
`;

const LinkText = styled.span`
  display: inline-block;
  margin-top: 4px;
  margin-left: 8px;
`;

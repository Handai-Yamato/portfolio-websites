import React from "react";
import ChatbotImage from "../assets/img/image_chatbotapp.png";
import KyonokaigobinImage from "../assets/img/image_kyonokaigobin.png";
import TypingGameImage from "../assets/img/image_typinggame.png";
import PortfolioImage from "../assets/img/image_portfolio.png";
import LineCloneImage from "../assets/img/image_line-clone.png";
import CrmlabCloneImage from "../assets/img/image_crmlab-clone.png";
import GadgetShopImage from "../assets/img/image_gadget-shop.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { sm } from "./media";

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

const WorksPage = () => {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h2>Works</h2>

      <WorksWrap>
        <WorkContainer>
          <a href="https://crmlab-clone.vercel.app/" target={"blank"}>
            <WorksImage src={CrmlabCloneImage} alt="" />
          </a>
          <div>
            <WorksTitle>CRMLab corporate websites</WorksTitle>
            <WorksText>
              Next.jsとmicroCMSを連携して、自社サイトをいい感じ（勝手に）につくりなおしてみました。
            </WorksText>
            <WorksList>
              <WorksItem>
                <LinkHead>WEBSITE</LinkHead>
                <LinkText>
                  <a href="https://crmlab-clone.vercel.app/">https://crmlab-clone.vercel.app/</a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>SOURCE</LinkHead>
                <LinkText>
                  <a href="https://github.com/Handai-Yamato/crmlab-clone" target={"blank"}>
                    https://github.com/Handai-Yamato/crmlab-clone
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>STACK</LinkHead>
                <LinkText>
                  Next.js, MUI, Framer motion, microCMS,<br></br>Vercel(Hosting)
                </LinkText>
              </WorksItem>
            </WorksList>
          </div>
        </WorkContainer>

        <WorkContainer>
          <a href="https://my-portfolio-6ae05.web.app" target={"blank"}>
            <WorksImage src={PortfolioImage} alt="" />
          </a>
          <div>
            <WorksTitle>My Portfolio</WorksTitle>
            <WorksText>ポートフォリオをReactでつくりました。</WorksText>
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
        </WorkContainer>

        <WorkContainer>
          <a href="https://symphonious-cendol-d8e8e8.netlify.app/" target={"blank"}>
            <WorksImage src={GadgetShopImage} alt="" />
          </a>
          <div>
            <WorksTitle>Gadget-Shop demo</WorksTitle>
            <WorksText>
              Next.jsのSSGを学習するためにつくりました。APIサーバーは
              <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>を使用しています。
            </WorksText>
            <WorksList>
              <WorksItem>
                <LinkHead>WEBSITE</LinkHead>
                <LinkText>
                  <a href="https://symphonious-cendol-d8e8e8.netlify.app/">
                    https://symphonious-cendol-d8e8e8.netlify.app/
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>SOURCE</LinkHead>
                <LinkText>
                  <a href="https://github.com/Handai-Yamato/gadget-shop-demo" target={"blank"}>
                    https://github.com/Handai-Yamato/gadget-shop-demos
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>STACK</LinkHead>
                <LinkText>Next.js, MUI, Framer motion, Netlify(Hosting)</LinkText>
              </WorksItem>
            </WorksList>
          </div>
        </WorkContainer>

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

        <WorkContainer>
          <a href="https://line-clone-a5d94.web.app/" target={"blank"}>
            <WorksImage src={LineCloneImage} alt="" />
          </a>
          <div>
            <WorksTitle>LINE Clone</WorksTitle>
            <WorksText>
              Reactを用いて、Firebase-AuthenticationでGoogle認証の実装に挑戦しました。
            </WorksText>
            <WorksList>
              <WorksItem>
                <LinkHead>WEBSITE</LinkHead>
                <LinkText>
                  <a href="https://line-clone-a5d94.web.app/" target={"blank"}>
                    https://line-clone-a5d94.web.app/
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>SOURCE</LinkHead>
                <LinkText>
                  <a href="https://github.com/Handai-Yamato/react-line-clone" target={"blank"}>
                    https://github.com/Handai-Yamato/react-line-clone
                  </a>
                </LinkText>
              </WorksItem>
              <WorksItem>
                <LinkHead>STACK</LinkHead>
                <LinkText>
                  React, MUI,<br></br>Firebase(Hosting, Authentication)
                </LinkText>
              </WorksItem>
            </WorksList>
          </div>
        </WorkContainer>

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
      </WorksWrap>
    </motion.div>
  );
};

export default WorksPage;

const WorksWrap = styled.div`
  ${sm`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  & > div {
    width: calc((100% - 48px) / 2);
  }
    `}
`;

const WorkContainer = styled.div`
  margin-top: 40px;
  text-align: center;

  ${sm`
    margin-top: 24px;
  `}
`;

const WorksImage = styled.img`
  height: 70vw;
  width: 100%;
  border-radius: 12px;
  border: 2px solid rgb(243 244 246);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.4s;

  &:hover {
    scale: 1.05;
  }

  ${sm`
    width: 280px;
    height: 240px;
  `}
`;

const WorksTitle = styled.h3`
  margin-top: 16px;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const WorksText = styled.p`
  margin-top: 16px;
  text-align: left;
  text-align: justify;

  ${sm`
   min-height: 72px;
  `}
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
`;

const LinkHead = styled.div`
  padding: 4px;
  color: rgb(187 247 208);
  background-color: rgb(74 222 128 / 0.1);
`;

const LinkText = styled.span`
  display: inline-block;
  margin-top: 4px;
  margin-left: 8px;
  text-align: left;
  word-break: break-all;
`;

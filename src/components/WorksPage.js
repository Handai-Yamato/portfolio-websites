import React from "react";
import ChatbotImage from "../assets/img/image_chatbotapp.png";
import SilicagenImage from "../assets/img/image_silicagen.png";
import TypingGameImage from "../assets/img/image_typinggame.png";
import PortfolioImage from "../assets/img/image_portfolio.png";
import Heading from "./Heading";

const WorksPage = () => {
  return (
    <div className="p-4 md:p-0">
      <Heading title={"Works"} />
      <div>
        <a href="https://chatbot-app-acbf8.web.app/">
          <img
            className="w-84 m-auto rounded-md transition-all hover:scale-105 border-2 border-gray-100"
            src={PortfolioImage}
            alt=""
          />
        </a>
        <div className="">
          <h3 className="mt-4 text-lg ">My Portfolio</h3>
          <p className="mt-2">
            ポートフォリオをReact × Tailwind
            CSSでつくりました。この規模ならHTMLとCSSで良かったのですが、SPAをつくったことが無かったので、挑戦してみました。コンポーネントもあまり活用できていない、ただSPAをつくっただけのサイトになってしまいました。この辺を改善して、さらに"Framer
            Motion"などでアニメーションをもう少し増やしたいです。
          </p>
          <ul className="flex flex-col gap-2 mt-3 text-sm">
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">WEBSITE</span>
              <a className="ml-2 text-pink-500" href="https://chatbot-app-acbf8.web.app/">
                https://chatbot-app-acbf8.web.app/
              </a>
            </li>
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">SOURCE</span>
              <a
                className="ml-2 text-pink-500"
                href="https://github.com/Handai-Yamato/portfolio-websites"
              >
                https://github.com/Handai-Yamato/portfolio-websites
              </a>
            </li>
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">STACK</span>
              <span className="ml-2">React, Tailwind CSS, Firebase(Hosting)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <a href="https://chatbot-app-acbf8.web.app/">
          <img
            className="w-84 m-auto rounded-md transition-all hover:scale-105 border-2 border-gray-100"
            src={ChatbotImage}
            alt=""
          />
        </a>
        <div className="">
          <h3 className="mt-4 text-lg ">Chatobot App</h3>
          <p className="mt-2">チャットボット形式私のことについて質問できます。</p>
          <ul className="flex flex-col gap-2 mt-3 text-sm">
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">WEBSITE</span>
              <a className="ml-2 text-pink-500" href="https://chatbot-app-acbf8.web.app/">
                https://chatbot-app-acbf8.web.app/
              </a>
            </li>
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">SOURCE</span>
              <a className="ml-2 text-pink-500" href="https://github.com/Handai-Yamato/chatbot-app">
                https://github.com/Handai-Yamato/chatbot-app
              </a>
            </li>
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">STACK</span>
              <span className="ml-2">React, MUI, Firebase(Hosting)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <a href="https://handai-yamato.github.io/silicagen-training/">
          <img
            className="w-84 m-auto rounded-md transition-all hover:scale-105 border-2 border-gray-100"
            src={SilicagenImage}
            alt=""
          />
        </a>
        <div className="">
          <h3 className="mt-4 text-lg ">Silicagen / Corporate Website</h3>
          <p className="mt-2">
            株式会社シリカジェンのコーポレートサイトを模写コーディングしました。
          </p>
          <ul className="flex flex-col gap-2 mt-3 text-sm">
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">WEBSITE</span>
              <a
                className="ml-2 text-pink-500"
                href="https://handai-yamato.github.io/silicagen-training/"
              >
                https://handai-yamato.github.io/silicagen-training/
              </a>
            </li>
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">SOURCE</span>
              <a
                className="ml-2 text-pink-500"
                href="https://github.com/Handai-Yamato/silicagen-training"
              >
                https://github.com/Handai-Yamato/silicagen-training
              </a>
            </li>
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">STACK</span>
              <span className="ml-2">HTML, CSS, Sass, gulp,</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <a href="https://handai-yamato.github.io/typing-game-app/">
          <img
            className="w-84 m-auto rounded-md transition-all hover:scale-105 border-2 border-gray-100"
            src={TypingGameImage}
            alt=""
          />
        </a>
        <div className="">
          <h3 className="mt-4 text-lg ">Typing Game</h3>
          <p className="mt-2">寿○打風のゲームです。APIをたたく学習を兼ねてつくりました。</p>
          <ul className="flex flex-col gap-2 mt-3 text-sm">
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">WEBSITE</span>
              <a
                className="ml-2 text-pink-500"
                href="https://handai-yamato.github.io/typing-game-app/"
              >
                https://handai-yamato.github.io/typing-game-app/
              </a>
            </li>
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">SOURCE</span>
              <a
                className="ml-2 text-pink-500"
                href="https://github.com/Handai-Yamato/typing-game-app"
              >
                https://github.com/Handai-Yamato/typing-game-app
              </a>
            </li>
            <li>
              <span className="text-green-200 bg-green-400 bg-opacity-10 p-1">STACK</span>
              <span className="ml-2">HTML, CSS, JavaScript(Vanilla)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;

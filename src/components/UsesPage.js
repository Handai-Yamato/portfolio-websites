import React from "react";
import Keychron from "../assets/img/image_keychronk6.jpg";
import Skyloong from "../assets/img/image_skyloong-sk64.jpg";
import Mxkeys from "../assets/img/image_mxkeysmini.jpg";
import Desk from "../assets/img/image_sukida-desk.jpg";
import Boyata from "../assets/img/image_boyata.jpg";
import Usbhub from "../assets/img/image_anker-usbhub7.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { sm } from "./media";

export default function BasicModal() {
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
        <h3>My Favorite Gadget</h3>
        <HeadText>
          現在働いている会社では完全リモートワークを実施しており、家のデスクで過ごす時間が格段に増えました。元々ガジェットが好きなこともありますが、仕事の生産性向上を目的に家のワークスペースはこだわりたいと考えています。
        </HeadText>
      </motion.div>

      <Contents>
        <UsesContent>
          <motion.div
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.8,
            }}
          >
            <Image src={Keychron} alt="" />
            <UsesName>Keychron K6</UsesName>
            <Type>Main keyboard</Type>
          </motion.div>
        </UsesContent>

        <UsesContent>
          <motion.div
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.8,
            }}
          >
            <Image src={Mxkeys} alt="" />
            <UsesName>MX KEYS MINI for mac</UsesName>
            <Type>Office keyboard</Type>
          </motion.div>
        </UsesContent>

        <UsesContent>
          <motion.div
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.8,
            }}
          >
            <Image src={Skyloong} alt="" />
            <UsesName>Skyloong SK64</UsesName>
            <Type>Sub keyboard</Type>
          </motion.div>
        </UsesContent>

        <UsesContent>
          <motion.div
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.8,
            }}
          >
            <Image src={Boyata} alt="" />
            <UsesName>BOYATA</UsesName>
            <Type>PC Stand</Type>
          </motion.div>
        </UsesContent>

        <UsesContent>
          <motion.div
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.8,
            }}
          >
            <Image src={Usbhub} alt="" />
            <UsesName>Anker USB hub</UsesName>
            <Type>USB hub</Type>
          </motion.div>
        </UsesContent>

        <UsesContent>
          <motion.div
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.8,
            }}
          >
            <Image src={Desk} alt="" />
            <UsesName>SUKIDA 電動昇降デスク</UsesName>
            <Type>Desk</Type>
          </motion.div>
        </UsesContent>
      </Contents>
    </div>
  );
}

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;

  ${sm`
  gap: 24px;
  flex-direction: unset;
  flex-wrap: wrap;

  `}
`;

const HeadText = styled.p`
  margin-top: 16px;
  margin-bottom: 32px;
`;

const UsesContent = styled.div`
  text-align: center;

  ${sm`
  width: calc(50% - 24px);
  flex-direction: unset;
  `}
`;

const UsesName = styled.p`
  margin-top: 8px;
  font-size: 20px;
  font-weight: 700;
`;

const Type = styled.p`
  display: block;
  margin-top: 4px;
  font-size: 16px;
  color: #d4d4d8;
`;

const Image = styled.img`
  width: 80%;
  min-width: 300px;
  max-height: 300px;
  border-color: rgb(63, 63, 70);
  border-width: 1px;
  border-radius: 16px;

  ${sm`
  min-height: 240px;
  max-height: 240px;
  
  `}
`;

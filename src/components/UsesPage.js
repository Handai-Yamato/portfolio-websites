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

export default function BasicModal() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h2>My Gadget</h2>
      <HeadText>
        現在働いている会社では完全リモートワークを実施しているため、自宅のデスクで過ごす時間が格段に増えました。元々ガジェットが好きなこともありますが、自宅のワークスペースにはこだわりを持っています。
      </HeadText>

      <Contents>
        <UsesContent>
          <Image src={Keychron} alt="" />
          <UsesName>Keychron K6</UsesName>
          <Type>Main keyboard</Type>
        </UsesContent>

        <UsesContent>
          <Image src={Mxkeys} alt="" />
          <UsesName>MX KEYS MINI for mac</UsesName>
          <Type>Office keyboard</Type>
        </UsesContent>

        <UsesContent>
          <Image src={Skyloong} alt="" />
          <UsesName>Skyloong SK64</UsesName>
          <Type>Sub keyboard</Type>
        </UsesContent>

        <UsesContent>
          <Image src={Boyata} alt="" />
          <UsesName>BOYATA</UsesName>
          <Type>PC Stand</Type>
        </UsesContent>

        <UsesContent>
          <Image src={Usbhub} alt="" />
          <UsesName>Anker USB hub</UsesName>
          <Type>USB hub</Type>
        </UsesContent>

        <UsesContent>
          <Image src={Desk} alt="" />
          <UsesName>SUKIDA 電動昇降デスク</UsesName>
          <Type>Desk</Type>
        </UsesContent>
      </Contents>
    </motion.div>
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

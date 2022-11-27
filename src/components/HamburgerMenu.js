import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import "../assets/styles/style.css";
import DrawerMenu from "./DrawerMenu";
import styled from "styled-components";
import { sm } from "./media";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const HamburgerMenu = () => {
  // drawerがopenしているかどうかのstate
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <Menu>
      <Icon onClick={() => setDrawerOpened(true)}></Icon>
      <Drawer anchor={"right"} open={drawerOpened} onClose={() => setDrawerOpened(false)}>
        <DrawerMenu />
      </Drawer>
    </Menu>
  );
};

export default HamburgerMenu;

const Menu = styled.header`
  ${sm`
  display: none;
  `}
`;

const Icon = styled(MenuRoundedIcon)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 38px !important;
  height: 38px !important;
  padding: 8px;
  border: 1px solid rgb(63, 63, 70);
  border-radius: 8px;
`;

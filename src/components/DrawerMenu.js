import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DrawerMenu = () => {
  return (
    <DrawerList>
      <Link to="/">Home</Link>
      <Link to="/works">Works</Link>
      <Link to="/Uses">Uses</Link>
    </DrawerList>
  );
};

export default DrawerMenu;

const DrawerList = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 48px;
  padding-left: 32px;
  font-size: 18px;

  a:hover {
    text-decoration: none;
  }
`;

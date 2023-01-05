import * as React from "react";
import { sm } from "./media";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        paddingTop: "40px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link to="/">
        <ListItemButton>
          <HomeIcon sx={{ marginRight: "8px" }} />
          Home
        </ListItemButton>
      </Link>

      <Link to="/works">
        <ListItemButton>
          <WorkIcon sx={{ marginRight: "8px" }} />
          Works
        </ListItemButton>
      </Link>

      <a href="https://github.com/Handai-Yamato/portfolio-websites">
        <ListItemButton>
          <GitHubIcon sx={{ marginRight: "8px" }} />
          Source
        </ListItemButton>
      </a>
    </Box>
  );

  return (
    <HamburgerMenu>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{
              position: "absolute",
              top: "16px",
              right: "16px",
              padding: "4px",
              minWidth: "unset",
              background: "#202023",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "4px",
              color: "white",
            }}
          >
            <MenuTwoToneIcon />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </HamburgerMenu>
  );
}

const HamburgerMenu = styled.nav`
  ${sm`
    display:none;
  `}
`;

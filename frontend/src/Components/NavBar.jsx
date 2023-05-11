import { AppBar, IconButton, Toolbar } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import componentStyles from "../styles/components.module.css";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const NavBand = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const RouteLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: large;
`;

export default function NavBar() {
  return (
    <AppBar position="static">
      <NavBand>
        <RouteLink to={"/public"}>Public</RouteLink>
        <RouteLink to={"/private"}>Private</RouteLink>
        <IconButton className={componentStyles.icon}>
          <LoginIcon />
        </IconButton>
        <IconButton className={componentStyles.icon}>
          <LogoutIcon />
        </IconButton>
      </NavBand>
    </AppBar>
  );
}

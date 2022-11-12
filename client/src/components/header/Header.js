import React from "react";
import "./Header.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import ReactSwitch from "react-switch";
import { useColorMode } from "../../hooks/useColorMode";
import AV1 from "./../../assets/Avatars/1.jpg";
import AV2 from "./../../assets/Avatars/2.jpeg";
import AV3 from "./../../assets/Avatars/3.jpg";
import AV4 from "./../../assets/Avatars/4.jpg";
import AV5 from "./../../assets/Avatars/5.jpg";
import AV6 from "./../../assets/Avatars/6.jpg";
import AV7 from "./../../assets/Avatars/6.jpg";
import AV8 from "./../../assets/Avatars/6.jpg";

export const Header = ({ auth }) => {
  const { theme, changeTheme } = useThemeContext();
  const avatars = [AV1, AV2, AV3, AV4, AV5, AV6, AV7, AV8];

  const handleNavbarClick = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div
        className="navbar-container"
        id="navbar-container"
        style={{ background: useColorMode("#f5f5f5", "black") }}
      >
        <div className="navbar-title">Strings</div>
        <div className="navbar-links">
          <ul>
            <li>
              <div className="switch">
                <ReactSwitch
                  onChange={handleNavbarClick}
                  checked={theme === "dark"}
                />
              </div>
            </li>
            {auth ? (
              <>
              <li><img className="profile-img" alt="" src={avatars[JSON.parse(auth).user.avatar]}></img></li>
                <li>{JSON.parse(auth).user.name}</li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

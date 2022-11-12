import React from "react";
import "./Header.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import ReactSwitch from "react-switch";
import {useColorMode} from "../../hooks/useColorMode"

export const Header = ({auth}) => {
  const { theme, changeTheme } = useThemeContext();

  const handleNavbarClick = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="navbar-container" id="navbar-container" style={{background:useColorMode("#f5f5f5", "black") }}>
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
            {
              auth?
              <li>{JSON.parse(auth).user.name}</li>:""
            }
            
          </ul>
        </div>
      </div>
    </>
  );
};

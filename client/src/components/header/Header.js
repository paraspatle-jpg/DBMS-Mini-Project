import React from "react";
import "./Header.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import ReactSwitch from "react-switch";
export const Header = () => {
  const { theme, changeTheme } = useThemeContext();

  const handleNavbarClick = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="navbar-container">
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
            <li>Profile</li>
          </ul>
        </div>
      </div>
    </>
  );
};

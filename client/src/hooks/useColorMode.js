import { useThemeContext } from "../theme/ThemeProvider";

export const useColorMode = (lightModeValue, darkModeValue) => {
  const { theme } = useThemeContext();

  return theme === "light" ? lightModeValue : darkModeValue;
};

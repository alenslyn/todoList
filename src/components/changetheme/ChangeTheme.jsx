import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "../Theme/ThemeProvider";

const ChangeTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <IconButton
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === "light" ? (
          <img src="images/darkIcon.svg" alt="Light Icon" />
        ) : (
          <img src="images/lightIcon.svg" alt="Dark Icon" />
        )}
      </IconButton>
    </div>
  );
};

export default ChangeTheme;

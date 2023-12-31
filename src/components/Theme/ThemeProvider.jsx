import { useState, createContext } from "react";
import "./theme.css";

export const ThemeContext = createContext("light");

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === "light" ? "lightTheme" : "darkTheme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

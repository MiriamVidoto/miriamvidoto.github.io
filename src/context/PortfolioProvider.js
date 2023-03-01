import { useState } from "react";
import PortfolioContext from "./PortfolioContext";
import light from '../themes/light';
import dark from '../themes/dark';

export default function PortfolioProvider({ children }) {
  const [theme, setTheme] = useState(light);
  const [skillSelected, setSkillSelected] = useState();

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  }


  const value = { theme, toggleTheme, skillSelected, setSkillSelected };
  
  return (
    <PortfolioContext.Provider value={ value }>
      {children}
    </PortfolioContext.Provider>
  );
}

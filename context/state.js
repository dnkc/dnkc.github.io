// src/context/state.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [currentTheme, setCurrentTheme] = useState("white");

  let allThemes = {
    themes: [
      "light",
      "dark",
      "bumblebee",
      "emerald",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "garden",
      "aqua",
      "fantasy",
      "autumn",
      "business",
      "acid",
      "night",
      "winter",
    ],
  };

  return (
    <AppContext.Provider value={{ allThemes, currentTheme, setCurrentTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

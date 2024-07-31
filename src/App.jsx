import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Secondpage from "./pages/Secondpage";
import "./styles.css";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const body = document.querySelector("body");

  useEffect(() => {
    if (theme === "dark") {
      if (body.classList.contains("light")) {
        body.classList.remove("light");
      }

      body.classList.add("dark");

      body.style.backgroundColor = "black";
    } else {
      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
      }

      body.classList.add("light");

      body.style.backgroundColor = "white";
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/second" element={<Secondpage />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

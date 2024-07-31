import styles from "./Navbar.module.css";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";

function Navbar({ link }) {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleButtonClick(e) {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <nav className={styles.navbar}>
      <h1>test</h1>
      <button onClick={handleButtonClick}>
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      {link}
    </nav>
  );
}

export default Navbar;

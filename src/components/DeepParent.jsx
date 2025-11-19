import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MidChild from "./MidChild";

const DeepParent = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <section className={`deep-parent ${theme}`}>
      <h2>DeepParent — уровень 1 (использует theme)</h2>
      <p>Текущая тема: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Переключить тему</button>

      {/* Передаём вложенный компонент (уровень 2) */}
      <MidChild />
    </section>
  );
};

export default DeepParent;

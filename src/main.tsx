import React from "react";
import ReactDOM from "react-dom/client"; // Изменили импорт
import App from "./App";
import './index.css';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement); // Создаём корень

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { h } from "./dom";
import "./styles/global.scss";
import Main from "./components/Main/Main";
const myElement = (
  <div className="game-container">
    <Main />
  </div>
);

// 2. Находим контейнер в HTML
const root = document.getElementById("app");

// 3. Вставляем созданный элемент
if (root) {
  root.appendChild(myElement);
}

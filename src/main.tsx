// 1. Импортируем твои компоненты (добавь сюда другие страницы позже)
import { h } from "./dom";
import "./styles/global.scss";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import UnionMenu from "./components/Menu/NavigationMenu/UnionMenu/UnionMenu";

interface IRoutes {
  [key: string]: () => HTMLElement;
}

// 2. Описываем маршруты (адрес -> компонент)
const routes: IRoutes = {
  "/": Main,
  "/menu": Menu,
  "/menu/towers": UnionMenu,
};

export const navigate = (path: string) => {
  window.history.pushState({}, "", path); // Меняем URL без перезагрузки
  router(); // Вызываем перерисовку
};

// 3. Функция-роутер
function router() {
  const root = document.getElementById("app");
  if (!root) return;

  const path = window.location.pathname;

  const Component = routes[path] || Main;

  root.innerHTML = "";
  root.appendChild(
    <div className="game-container">
      <Component />
    </div>,
  );
}

window.addEventListener("popstate", router);

// Первый запуск при загрузке страницы
router();

// Слушаем все клики по документу
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  // Ищем, был ли клик по ссылке (тег <a>)
  const anchor = target.closest("a");

  if (anchor && anchor.href.startsWith(window.location.origin)) {
    e.preventDefault(); // Запрещаем браузеру перезагружать страницу
    const path = anchor.getAttribute("href") || "/";
    navigate(path); // Переходим через наш роутер
  }
});

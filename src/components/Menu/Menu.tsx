import styles from "./Menu.module.scss";
import { h } from "../../dom";
import Header from "./Header/Header";
import Play from "./Play/Play";
import NavigationMenu from "./NavigationMenu/NavigationMenu";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Header />
      <Play />
      <NavigationMenu />
    </div>
  );
}

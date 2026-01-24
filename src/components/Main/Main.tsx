import styles from "./Main.module.scss";
import { h } from "../../dom";
import { render } from "./Main.logic";
export default function Main() {
  const main = (
    <main className={styles.main} id="id-main"></main>
  ) as HTMLElement;

  render("auth", main);
  return main;
}

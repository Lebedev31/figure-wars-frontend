import { messenger, EVENT } from "../../../../../utils/messenger";
import styles from "./Tabs.module.scss";

// подкючаем класс активного таба
export function onClickTabs(e: Event) {
  const target = e.target as HTMLElement;
  const parent = target.parentElement;
  if (
    target.children[0].tagName === "IMG" &&
    !target.classList.contains(styles.active) &&
    parent
  ) {
    parent
      .querySelectorAll(`.${styles.active}`)
      .forEach((item) => item.classList.remove(styles.active));

    target.classList.add(styles.active);
  }
}
export function getName(name: string) {
  const event = new CustomEvent(EVENT.MENU_TABS, { detail: name });
  messenger.dispatchEvent(event);
}

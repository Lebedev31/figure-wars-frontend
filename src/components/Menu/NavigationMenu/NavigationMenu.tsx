import styles from "./NavigationMenu.module.scss";
import { h } from "../../../dom";

const MENU_ITEMS = [
  {
    id: "market",
    label: "РЫНОК",
    href: "/menu/shop",
    iconPath:
      "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
  },
  {
    id: "heroes",
    label: "ГЕРОИ",
    href: "/menu/heroes",
    iconPath:
      "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
  },
  {
    id: "tower",
    label: "БАШНИ",
    href: "/menu/towers",
    iconPath:
      "M21 21H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5v4h2V2h4v4h2V2h5a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zM7 10h2v2H7v-2zm8 0h2v2h-2v-2zm-4 0h2v2h-2v-2z",
  },
  {
    id: "units",
    label: "ЮНИТЫ",
    href: "/menu/units",
    iconPath:
      "M3 3h18v18H3V3zm15 11h-2c0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4zM8.5 8C7.67 8 7 8.67 7 9.5S7.67 11 8.5 11s1.5-.67 1.5-1.5S9.33 8 8.5 8zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 8 15.5 8z",
  },
  {
    id: "generators",
    label: "ГЕНЕРАТОРЫ",
    href: "/menu/generators",
    iconPath: "M13 2L3 14h9v8l10-12h-9l10-10z",
  },
];

export default function NavigationMenu() {
  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.navigationContainer}>
        <div className={styles.menuList}>
          {MENU_ITEMS.map((item) => (
            <div className={styles.menuItem}>
              <a href={item.href} className={styles.menuLink}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24">
                    <path d={item.iconPath} fill="currentColor" />
                  </svg>
                </div>
                <span className={styles.label}>{item.label}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

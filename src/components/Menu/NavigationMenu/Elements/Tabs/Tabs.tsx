import styles from "./Tabs.module.scss";
import { h } from "../../../../../dom";
import { getTowerName, onClickTabs } from "./Tabs.logic";

type TabsProps<Name extends string, Patch extends string> = {
  name: Name;
  src: Patch;
};

export default function Tabs<Name extends string, Patch extends string>(
  tabsProps: TabsProps<Name, Patch>[],
) {
  return (
    <div className={styles.tabs} onclick={(e) => onClickTabs(e)}>
      {tabsProps.map((item) => {
        return (
          <div>
            <img src={item.src} alt="картинка" />
          </div>
        );
      })}
    </div>
  );
}

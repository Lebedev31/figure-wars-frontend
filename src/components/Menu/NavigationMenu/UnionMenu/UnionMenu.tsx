import styles from "./UnionMenu.module.scss";
import { h } from "../../../../dom";
import { towers } from "../../../../type/towers";
import Tabs from "../Elements/Tabs/Tabs";
import "../NavigationMenu.logic";
import type {
  LiteralUnionNameTowers,
  LiteralUnionPathTowersImg,
} from "../../../../type/towers";

export default function UnionMenu() {
  return (
    <div className={styles.union_menu}>
      <div className={styles.panel}>
        <div className={styles.tabs}>
          {Tabs<LiteralUnionNameTowers, LiteralUnionPathTowersImg>(towers)}
          <div className={styles.dynamic_container} id="union_menu"></div>
        </div>
      </div>
    </div>
  );
}

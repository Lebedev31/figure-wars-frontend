import styles from "./TowersMenu.module.scss";
import { h } from "../../../../dom";
import { towers } from "../../../../type/towers";
import Tabs from "../Elements/Tabs/Tabs";
import type {
  LiteralUnionNameTowers,
  LiteralUnionPathTowersImg,
} from "../../../../type/towers";

export default function TowersMenu() {
  return (
    <div className={styles.tower_menu}>
      <div className={styles.panel}>
        <div className={styles.tabs}>
          {Tabs<LiteralUnionNameTowers, LiteralUnionPathTowersImg>(towers)}
        </div>
      </div>
    </div>
  );
}

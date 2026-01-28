import styles from "./Header.module.scss";
import { h } from "../../../dom";
import { getParseLocalStorageInfo } from "../../../utils/generalFutncion";
import type { UserResponse } from "../../../type/register";

export default function Header() {
  const user = getParseLocalStorageInfo<UserResponse>("user");
  return (
    <header className={styles.header}>
      <div className={styles.profilePanel}>
        <span className={styles.userName}>{user?.login}</span>
        <div className={styles.avatar}>
          {/* Здесь можно вставить <img src="..." /> */}
        </div>
      </div>
    </header>
  );
}

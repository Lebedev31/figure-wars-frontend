import styles from "./Description.module.scss";
import { h } from "../../../../../dom";

export default function Description(description: string) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
}

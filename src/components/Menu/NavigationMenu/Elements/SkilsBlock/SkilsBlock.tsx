import styles from "./SkilsBlock.module.scss";
import type { Skill } from "../../../../../type/general.type";
import { h } from "../../../../../dom";

export default function SkilsBlock(skills: Skill[], name: string) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{`Улучшения ${name}`}</h2>

      <div className={styles.container}>
        {skills.map((skill) => (
          <div
            className={styles.skillWrapper}
            data-name={skill.name}
            title={skill.name}
          >
            <img
              src={skill.src}
              alt={skill.name}
              className={styles.skillIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

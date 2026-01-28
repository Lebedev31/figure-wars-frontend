import styles from "./Notification.module.scss";
import { h } from "../../dom";
import { removeNotification } from "./Notification.logic";

type NotificationProps = {
  text: string;
  type: "Error" | "Succsses" | "Warn"; // Оставил ваш вариант написания Succsses
};

export function Notification({ text, type }: NotificationProps) {
  // Определяем класс стиля в зависимости от типа
  const typeClass = styles[type.toLowerCase()];

  return (
    <div className={styles.wrapper} id="notification-id">
      <div className={`${styles.notification} ${typeClass}`}>
        <div className={styles.content}>{text}</div>
        <button
          className={styles.closeBtn}
          onclick={removeNotification}
          type="button"
          aria-label="Close notification"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

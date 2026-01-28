import { messenger, EVENT } from "../../utils/messenger";
import { Notification } from "./Notification";

export function notification({
  text,
  type,
}: {
  text: string;
  type: "Error" | "Succsses" | "Warn";
}) {
  const event = new CustomEvent(EVENT.NOTIFICATION, { detail: { type, text } });
  messenger.dispatchEvent(event);
}

export function removeNotification() {
  const event = new CustomEvent(EVENT.REMOVE_NOTIFICATION);
  messenger.dispatchEvent(event);
}

messenger.addEventListener(EVENT.NOTIFICATION, (e) => {
  const event = e as CustomEvent;
  const parent = document.querySelector(".game-container");
  const deletePrevChild = document.querySelector("#notification-id");

  if (deletePrevChild) {
    deletePrevChild.remove();
  }
  if (parent) {
    parent.appendChild(Notification(event.detail));
  }
});

messenger.addEventListener(EVENT.REMOVE_NOTIFICATION, () => {
  const parent = document.querySelector("#notification-id");

  if (parent) {
    parent.remove();
  }
});

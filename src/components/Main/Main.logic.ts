import { messenger, EVENT } from "../../utils/messenger";
import Registration from "../Register/Registration/Registration";
import Avtorization from "../Register/Avtorization/Avtorization";

export type ToggleRegistrationDetails = "auth" | "register";

export function toggleRegistration(details: ToggleRegistrationDetails) {
  const event = new CustomEvent(EVENT.TOGGLE_REGISTRATION, { detail: details });
  messenger.dispatchEvent(event);
}

export function render(type: ToggleRegistrationDetails, main: HTMLElement) {
  if (!main) return;
  main.innerHTML = "";
  if (type === "auth") {
    main.appendChild(Avtorization());
  } else {
    main.appendChild(Registration());
  }
}

messenger.addEventListener(EVENT.TOGGLE_REGISTRATION, (e) => {
  const event = e as CustomEvent;
  const main = document.querySelector("#id-main") as HTMLElement;
  if (main) {
    render(event.detail, main);
  }
});

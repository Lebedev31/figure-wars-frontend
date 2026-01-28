export const messenger = new EventTarget();

export const EVENT = {
  TOGGLE_REGISTRATION: "toggle_registration",
  NOTIFICATION: "notification",
  REMOVE_NOTIFICATION: "remove_notification",
  MENU_TABS: "menu_tabs",
} as const;

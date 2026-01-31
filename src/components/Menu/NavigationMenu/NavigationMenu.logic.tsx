import { messenger, EVENT } from "../../../utils/messenger";
import SkilsBlock from "./Elements/SkilsBlock/SkilsBlock";
import type { Skill } from "../../../type/general.type";
import { unionSkills } from "../../../type/branchesTowers/union";
import Description from "./Elements/Description/Description";
import { description as unionDescription } from "../../../type/branchesTowers/union";

function addBlockSlils(skills: Skill[], name: string, container: Element) {
  container.append(SkilsBlock(skills, name));
}

function addDescripttion(description: string, container: Element) {
  container.append(Description(description));
}

function unionAdd(skills: Skill[], name: string, description: string) {
  const container = document.querySelector("#union_menu");
  if (container) {
    container.innerHTML = "";
    addBlockSlils(skills, name, container);
    addDescripttion(description, container);
  }
}
messenger.addEventListener(EVENT.MENU_TABS, (e) => {
  const event = e as CustomEvent<string>;
  switch (event.detail) {
    case "union":
      unionAdd(unionSkills, " башен: Общие", unionDescription);
  }
});

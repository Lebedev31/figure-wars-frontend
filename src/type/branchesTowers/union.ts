// Определяем литеральный тип для имен файлов на основе твоего скриншота
import type { Skill } from "../general.type";
export type SkillFileName =
  | "oneRangDamage"
  | "oneRangHp"
  | "oneRangRange"
  | "twoRangSkillKrit"
  | "twoRangStan"
  | "twoRangToch"
  | "threeRang1.png"
  | "threeRang2.png"
  | "threeRang3.png";

export const unionSkills: Skill[] = [
  {
    name: "Сила Атаки",
    description: "Значительно увеличивает базовый урон башни.",
    src: "/towers/union-skils/oneRangDamage.png",
    effect: null,
  },
  {
    name: "Живучесть",
    description: "Повышает запас прочности конструкции.",
    src: "/towers/union-skils/oneRangHp.png",
    effect: null,
  },
  {
    name: "Дальнобойность",
    description: "Увеличивает радиус поражения целей.",
    src: "/towers/union-skils/oneRangRange.png",
    effect: null,
  },
  {
    name: "Критический удар",
    description: "Шанс нанести сокрушительный двойной урон.",
    src: "/towers/union-skils/twoRangSkillKrit.png",
    effect: null,
  },
  {
    name: "Стойкость",
    description: "Снижает время действия оглушения и сна.",
    src: "/towers/union-skils/twoRangStan.png",
    effect: null,
  },
  {
    name: "Меткость",
    description: "Повышает точность, уменьшая шанс промаха.",
    src: "/towers/union-skils/twoRangToch.png",
    effect: null,
  },

  {
    name: "1",
    description: "2",
    src: "/towers/union-skils/threeRang1.png",
    effect: null,
  },

  {
    name: "2",
    description: "3",
    src: "/towers/union-skils/threeRang2.png",
    effect: null,
  },

  {
    name: "1",
    description: "2",
    src: "/towers/union-skils/threeRang3.png",
    effect: null,
  },
];

export const description =
  "Общие улучшения башен, которые применяются ко всем без исключениям башням";

// Определяем литеральный тип для имен файлов на основе твоего скриншота
type SkillFileName =
  | "oneRangDamage"
  | "oneRangHp"
  | "oneRangRange"
  | "twoRangSkillKrit"
  | "twoRangStan"
  | "twoRangToch";

interface Skill {
  name: string;
  description: string;
  src: `/towers/union-skils/${SkillFileName}.png`;
  effect: any; // Пока оставляем any, как ты и просил
}

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
];

// 1. Базовые имена башен
export type LiteralUnionNameTowers =
  | "archer"
  | "artilery"
  | "magic"
  | "winter"
  | "union";

// 2. Имена башен с суффиксом 250
export type LiteralUnionNameTowers250 = `${LiteralUnionNameTowers}250`;

// 3. Пути для обычных изображений
export type LiteralUnionPathTowersImg = `/towers/${LiteralUnionNameTowers}.png`;

// 4. Пути для изображений 250
export type LiteralUnionPathTowersImg250 =
  `/towers250/${LiteralUnionNameTowers250}.png`;

// Общий интерфейс для объекта башни
interface Tower {
  name: LiteralUnionNameTowers;
  src: LiteralUnionPathTowersImg;
}

interface Tower250 {
  name: LiteralUnionNameTowers250;
  src: LiteralUnionPathTowersImg250;
}

// 5. Массив обычных башен
export const towers: Tower[] = [
  { name: "artilery", src: "/towers/artilery.png" },
  { name: "archer", src: "/towers/archer.png" },
  { name: "magic", src: "/towers/magic.png" },
  { name: "winter", src: "/towers/winter.png" },
  { name: "union", src: "/towers/union.png" },
];

// 6. Массив башен 250
export const towers250: Tower250[] = [
  { name: "artilery250", src: "/towers250/artilery250.png" },
  { name: "archer250", src: "/towers250/archer250.png" },
  { name: "magic250", src: "/towers250/magic250.png" },
  { name: "winter250", src: "/towers250/winter250.png" },
  { name: "union250", src: "/towers250/union250.png" },
];

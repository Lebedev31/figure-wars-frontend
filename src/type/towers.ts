export type LiteralUnionNameTowers =
  | "archer"
  | "artilery"
  | "magic"
  | "winter"
  | "union";
export type LiteralUnionPathTowersImg =
  | "/towers/archer.png"
  | "/towers/artilery.png"
  | "/towers/magic.png"
  | "/towers/winter.png"
  | "/towers/union.png";

export const towers: {
  name: LiteralUnionNameTowers;
  src: LiteralUnionPathTowersImg;
}[] = [
  {
    name: "artilery",
    src: "/towers/artilery.png",
  },
  {
    name: "archer",
    src: "/towers/archer.png",
  },

  {
    name: "magic",
    src: "/towers/magic.png",
  },

  {
    name: "winter",
    src: "/towers/winter.png",
  },

  {
    name: "union",
    src: "/towers/union.png",
  },
];

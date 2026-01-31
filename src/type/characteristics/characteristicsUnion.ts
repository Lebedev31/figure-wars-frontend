import { z } from "zod";

/**
 * Схема валидации характеристик (Zod).
 * Используется для проверки данных с сервера и автоматической генерации типов.
 */
export const CharacteristicsSchema = z.object({
  magicDamage: z.number().default(0), // Магический урон
  physicalDamage: z.number().default(0), // Физический урон
  hp: z.number().default(0), // Очки здоровья (живучесть)
  physicalArmor: z.number().default(0), // Физическая броня (защита от физ. атак)
  magicArmor: z.number().default(0), // Магическая броня (сопротивление магии)
  price: z.number().default(0), // Стоимость (в золоте или другой валюте)
});

export type Characteristics = z.infer<typeof CharacteristicsSchema>;

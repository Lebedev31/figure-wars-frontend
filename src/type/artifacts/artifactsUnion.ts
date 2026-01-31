import z from "zod";
import { CharacteristicsSchema } from "../characteristics/characteristicsUnion";

export const ArtifactSchema = z.object({
  id: z.string(),
  name: z.string(),
  src: z.string(),
  // Бонусы в абсолютных числах (например, +50 HP)
  flatBonuses: CharacteristicsSchema.partial().optional(),
  // Бонусы в процентах (например, 0.1 для +10% урона)
  percentBonuses: CharacteristicsSchema.partial().optional(),
});

export type Artifact = z.infer<typeof ArtifactSchema>;

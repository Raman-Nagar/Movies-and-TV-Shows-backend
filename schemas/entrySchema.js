import { z } from "zod";

export const entrySchema = z.object({
  title: z.string(),
  type: z.enum(["movie", "tv-show"]),
  director: z.string(),
  budget: z.number(),
  location: z.string(),
  duration: z.string(),
  year: z.number(),
});

import { z } from "zod";

export const PostDtoSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  tags: z.string().array(),
  reactions: z.number(),
});

export type PostDto = z.infer<typeof PostDtoSchema>;

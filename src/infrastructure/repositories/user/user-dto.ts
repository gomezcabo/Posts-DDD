import { z } from "zod";

export const UserDtoSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  age: z.number().min(0),
  image: z.string().url(),
});

export type UserDto = z.infer<typeof UserDtoSchema>;

import { z } from "zod";
import { PostDtoSchema } from "../post/post-dto";
import { UserDtoSchema } from "../user/user-dto";

export const CommentDtoSchema = z.object({
  id: z.number(),
  body: z.string(),
  postId: PostDtoSchema.shape["id"],
  user: z.object({
    id: UserDtoSchema.shape["id"],
    username: UserDtoSchema.shape["username"],
  }),
});

export type CommentDto = z.infer<typeof CommentDtoSchema>;

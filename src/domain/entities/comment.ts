import { Post } from "./post";
import { User } from "./user";

export type Comment = {
  id: number;
  body: string;
  postId: Post["id"];
  userId: User["id"];
};

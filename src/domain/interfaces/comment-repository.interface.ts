import { Comment } from "../entities/comment";
import { Post } from "../entities/post";

export interface CommentRepositoryInterface {
  getComments(): Promise<Comment[]>;
  getCommentById(postId: Post["id"]): Promise<Comment>;
}

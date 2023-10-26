import { Comment } from "../entities/comment";

export interface CommentRepositoryInterface {
  getComments(): Promise<Comment[]>;
  getCommentById(postId: number): Promise<Comment>;
}

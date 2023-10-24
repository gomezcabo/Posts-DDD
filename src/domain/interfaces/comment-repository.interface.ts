import { Comment } from "../models/comment";

export interface CommentRepositoryInterface {
  getComments(): Promise<Comment[]>;
  getCommentById(postId: number): Promise<Comment>;
}

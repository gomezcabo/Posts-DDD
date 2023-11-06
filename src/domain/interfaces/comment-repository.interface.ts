import { Comment } from "../entities/comment";

export abstract class CommentRepositoryInterface {
  abstract getComments(): Promise<Comment[]>;
  abstract getCommentById(postId: number): Promise<Comment>;
}

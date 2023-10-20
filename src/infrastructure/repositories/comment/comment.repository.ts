import { apiFetch } from "../../api-fetch/api-fetch";
import { Comment } from "../../../domain/models/comment";
import { CommentDto, CommentDtoSchema } from "./comment-dto";

export function mapCommentDtoToDomain(commentDto: CommentDto): Comment {
  return {
    id: commentDto.id,
    body: commentDto.body,
    postId: commentDto.id,
    userId: commentDto.user.id,
  };
}

export async function getCommentsByPostId(postId: number): Promise<Comment[]> {
  const commentsResponse = await apiFetch<{ comments: CommentDto[] }>(`/comments/post/${postId}`);
  console.log({ commentsResponse });
  return commentsResponse.comments.map((comment) => mapCommentDtoToDomain(CommentDtoSchema.parse(comment)));
}

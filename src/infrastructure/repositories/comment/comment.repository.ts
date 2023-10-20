import { apiFetch } from "../../api-fetch/api-fetch";
import { Comment } from "../../../domain/models/comment";
import { CommentDto, CommentDtoSchema } from "./comment-dto";

export function mapCommentDtoToDomain(commentDto: CommentDto): Comment {
  const parsedDtoComment = CommentDtoSchema.parse(commentDto);

  return {
    id: parsedDtoComment.id,
    body: parsedDtoComment.body,
    postId: parsedDtoComment.id,
    userId: parsedDtoComment.user.id,
  };
}

export async function getCommentsByPostId(postId: number): Promise<Comment[]> {
  const commentsResponse = await apiFetch<{ comments: CommentDto[] }>(`/comments/post/${postId}`);
  return commentsResponse.comments.map(mapCommentDtoToDomain);
}

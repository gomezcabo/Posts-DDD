import { ApiAdapter } from "../../api-adapter/api-adapter";
import { Comment } from "../../../domain/entities/comment";
import { CommentDto, CommentDtoSchema } from "./comment-dto";
import { CommentRepositoryInterface } from "../../../domain/interfaces/comment-repository.interface";

export class CommentRepository implements CommentRepositoryInterface {
  constructor(private apiAdapter: ApiAdapter) {}

  private static mapCommentDtoToDomain(commentDto: CommentDto): Comment {
    const parsedCommentDto = CommentDtoSchema.parse(commentDto);

    return {
      id: parsedCommentDto.id,
      body: parsedCommentDto.body,
      postId: commentDto.postId,
      userId: commentDto.user.id,
    };
  }

  async getComments(): Promise<Comment[]> {
    const commentsResponse = await this.apiAdapter.get<{ comments: CommentDto[] }>("/comments");
    return commentsResponse.comments.map(CommentRepository.mapCommentDtoToDomain);
  }

  async getCommentById(commentId: Comment["id"]): Promise<Comment> {
    const commentResponse = await this.apiAdapter.get<CommentDto>(`/comments/${commentId}`);
    return CommentRepository.mapCommentDtoToDomain(commentResponse);
  }
}

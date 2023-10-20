import { PostRepository } from "../../../infrastructure/repositories";
import { CommentService } from "../../../domain/services";
import { Post } from "../../models/post";
import { User } from "../../models/user";
import { Comment } from "../../models/comment";
import { CreatePostUseCase } from "../../use-cases/create-post-use-case";

export function getPosts(): Promise<Post[]> {
  return PostRepository.getPosts();
}

export function getPostById(postId: Post["id"]): Promise<Post> {
  return PostRepository.getPostById(postId);
}

export async function getPostByIdWithCommentsAndUsers(
  postId: Post["id"]
): Promise<Post & { comments: Array<Comment & { user: User }> }> {
  const post = await getPostById(postId);
  const comments = await CommentService.getCommentsByPostIdWithUser(postId);

  return { ...post, comments };
}

export async function createPost(post: Post) {
  const createPostUseCase = new CreatePostUseCase(PostRepository);
  createPostUseCase.execute(post);
}

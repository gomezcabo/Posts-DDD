import { Post } from "../entities/post";
import { inject, injectable } from "inversify";
import { PostRepository } from "../../infrastructure/repositories/post/post.repository";
import type { PostRepositoryInterface } from "../interfaces/post-repository.interface";

@injectable()
export class GetPostByIdUseCase {
  constructor(@inject(PostRepository) private readonly postRepository: PostRepositoryInterface) {}

  execute(postId: Post["id"]): Promise<Post> {
    return this.postRepository.getPostById(postId);
  }
}

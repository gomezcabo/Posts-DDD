import type { PostRepositoryInterface } from "../interfaces/post-repository.interface";
import { Post } from "../entities/post";
import { inject, injectable } from "inversify";
import { PostRepository } from "../../infrastructure/repositories/post/post.repository";

@injectable()
export class GetPostsUseCase {
  constructor(@inject(PostRepository) private readonly postRepository: PostRepositoryInterface) {}

  execute(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
}

import type { PostRepositoryInterface } from "../interfaces/post-repository.interface";
import { Post } from "../entities/post";
import { inject, injectable } from "inversify";
import { PostRepository } from "../../infrastructure/repositories/post/post.repository";

@injectable()
export class CreatePostUseCase {
  constructor(@inject(PostRepository) private readonly postRepository: PostRepositoryInterface) {}

  async execute(post: Post): Promise<Post["id"]> {
    const newPostId = await this.postRepository.createPost(post);
    return newPostId;
  }
}

import { PostRepositoryInterface } from "../interfaces/post-repository.interface";
import { Post } from "../entities/post";
import { inject, injectable } from "inversify";

@injectable()
export class CreatePostUseCase {
  constructor(@inject(PostRepositoryInterface) private readonly postRepository: PostRepositoryInterface) {}

  async execute(post: Omit<Post, "id">): Promise<Post["id"]> {
    const newPostId = await this.postRepository.createPost(post);
    return newPostId;
  }
}

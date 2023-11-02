import { PostRepositoryInterface } from "../interfaces/post-repository.interface";
import { Post } from "../entities/post";

export class CreatePostUseCase {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  async execute(post: Omit<Post, "id">): Promise<Post["id"]> {
    const newPostId = await this.postRepository.createPost(post);
    return newPostId;
  }
}

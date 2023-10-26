import { PostRepositoryInterface } from "../interfaces/post-repository.interface";
import { Post } from "../entities/post";

export class CreatePostUseCase {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  async execute(post: Post): Promise<Post["id"]> {
    const newPostId = await this.postRepository.createPost(post);
    return newPostId;
  }
}

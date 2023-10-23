import { PostRepositoryInterface } from "../interfaces/post-repository.interface";
import { Post } from "../models/post";

export class GetPostByIdUseCase {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  async execute(postId: Post["id"]): Promise<Post> {
    return this.postRepository.getPostById(postId);
  }
}

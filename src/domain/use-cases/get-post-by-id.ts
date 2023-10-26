import { PostRepositoryInterface } from "../interfaces/post-repository.interface";
import { Post } from "../entities/post";

export class GetPostByIdUseCase {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  execute(postId: Post["id"]): Promise<Post> {
    return this.postRepository.getPostById(postId);
  }
}

import { PostRepositoryInterface } from "../interfaces/post-repository.interface";
import { Post } from "../entities/post";

export class GetPostsUseCase {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  execute(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
}

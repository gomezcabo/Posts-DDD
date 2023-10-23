import { PostRepositoryInterface } from "../interfaces/post-repository.interface";
import { Post } from "../models/post";

export class GetPostsUseCase {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  async execute(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
}

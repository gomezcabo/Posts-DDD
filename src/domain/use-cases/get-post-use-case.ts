import { PostRepository } from "../../infrastructure/repositories";
import { Post } from "../models/post";

export class GetPostsUseCase {
  constructor(private readonly postRepository: typeof PostRepository) {}

  async execute(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
}

import { Post } from "../models/post";
import * as PostRepository from "../../infrastructure/repositories/post/post.repository";

export class GetPostsUseCase {
  constructor(private readonly postRepository: typeof PostRepository) {}

  async execute(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
}

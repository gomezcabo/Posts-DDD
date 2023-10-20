import { PostRepository } from "../../infrastructure/repositories";
import { Post } from "../models/post";

export class CreatePostUseCase {
  constructor(private readonly postRepository: typeof PostRepository) {}

  async execute(post: Post): Promise<Post["id"]> {
    const newPostId = await this.postRepository.createPost(post);
    return newPostId;
  }
}

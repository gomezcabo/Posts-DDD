import { Post } from "../models/post";
import * as PostRepository from "../../infrastructure/repositories/post/post.repository";

export class CreatePostUseCase {
  constructor(private readonly postRepository: typeof PostRepository) {}

  async execute(post: Post): Promise<Post["id"]> {
    const newPostId = await this.postRepository.createPost(post);
    return newPostId;
  }
}

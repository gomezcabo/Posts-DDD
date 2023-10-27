import { Post } from "../entities/post";
import { inject, injectable } from "inversify";
import { PostRepository } from "../../infrastructure/repositories/post/post.repository";

@injectable()
export class GetPostByIdUseCase {
  constructor(@inject(PostRepository) private postRepository: PostRepository) {}

  execute(postId: Post["id"]): Promise<Post> {
    return this.postRepository.getPostById(postId);
  }
}

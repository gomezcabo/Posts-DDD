import { Post } from "../entities/post";
import { inject, injectable } from "inversify";
import { PostRepositoryInterface } from "../interfaces/post-repository.interface";

@injectable()
export class GetPostByIdUseCase {
  constructor(@inject(PostRepositoryInterface) private readonly postRepository: PostRepositoryInterface) {}

  execute(postId: Post["id"]): Promise<Post> {
    return this.postRepository.getPostById(postId);
  }
}

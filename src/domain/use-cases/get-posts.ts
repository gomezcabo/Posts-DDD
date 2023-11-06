import { PostRepositoryInterface } from "../interfaces/post-repository.interface";
import { Post } from "../entities/post";
import { inject, injectable } from "inversify";

@injectable()
export class GetPostsUseCase {
  constructor(@inject(PostRepositoryInterface) private readonly postRepository: PostRepositoryInterface) {}

  execute(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
}

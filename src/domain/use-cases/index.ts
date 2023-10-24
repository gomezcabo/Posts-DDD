import { GetPostByIdUseCase } from "./get-post-by-id";
import { GetPostsUseCase } from "./get-posts";
import { CreatePostUseCase } from "./create-post";
import { ApiAdapter } from "../../infrastructure/api-adapter/api-adapter";
import { PostRepository } from "../../infrastructure/repositories/post/post.repository";

const apiAdapter = new ApiAdapter();
const postRepository = new PostRepository(apiAdapter);

export const PostUseCases = {
  GetPostByIdUseCase: new GetPostByIdUseCase(postRepository),
  GetPostsUseCase: new GetPostsUseCase(postRepository),
  CreatePostUseCase: new CreatePostUseCase(postRepository),
};

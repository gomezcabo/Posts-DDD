import { useQuery } from "@tanstack/react-query";
import { Post } from "../../../domain/entities/post";
import { ApiAdapter } from "../../api-adapter/api-adapter";
import { PostRepository } from "../../repositories/post/post.repository";
import { GetPostByIdUseCase } from "../../../domain/use-cases/get-post-by-id";

export function usePostById(postId: Post["id"]) {
  const apiAdapter = new ApiAdapter();
  const postRepository = new PostRepository(apiAdapter);
  const getPostByIdUseCase = new GetPostByIdUseCase(postRepository);

  return useQuery(["posts", postId], () => getPostByIdUseCase.execute(postId));
}

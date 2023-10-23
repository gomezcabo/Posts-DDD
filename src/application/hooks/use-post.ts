import { useQuery } from "@tanstack/react-query";
import { Post } from "../../domain/models/post";
import { Api } from "../../infrastructure/api-fetch/api-fetch";
import { PostRepository } from "../../infrastructure/repositories/post/post.repository";
import { PostUseCases } from "../../domain/use-cases";

const postRepository = new PostRepository(new Api());
const getPostByIdUseCase = new PostUseCases.GetPostByIdUseCase(postRepository);

export function usePost(postId: Post["id"]) {
  return useQuery(["posts", postId], () => getPostByIdUseCase.execute(postId));
}

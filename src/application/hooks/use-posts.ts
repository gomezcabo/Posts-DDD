import { useQuery } from "@tanstack/react-query";
import { Api } from "../../infrastructure/api-fetch/api-fetch";
import { PostUseCases } from "../../domain/use-cases";
import { PostRepository } from "../../infrastructure/repositories/post/post.repository";

const api = new Api();
const postRepository = new PostRepository(api);
const getPostsUseCase = new PostUseCases.GetPostsUseCase(postRepository);

export function usePosts() {
  return useQuery(["posts"], () => getPostsUseCase.execute());
}

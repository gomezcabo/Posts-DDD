import { useQuery } from "@tanstack/react-query";
import container from "../../../inversify";
import { GetPostsUseCase } from "../../../domain/use-cases/get-posts";

export function usePosts() {
  const getPostsUseCase = container.get(GetPostsUseCase);
  return useQuery(["posts"], () => getPostsUseCase.execute());
}

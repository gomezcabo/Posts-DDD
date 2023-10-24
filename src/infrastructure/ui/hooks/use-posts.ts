import { useQuery } from "@tanstack/react-query";
import { PostUseCases } from "../../../domain/use-cases";

export function usePosts() {
  return useQuery(["posts"], () => PostUseCases.GetPostsUseCase.execute());
}

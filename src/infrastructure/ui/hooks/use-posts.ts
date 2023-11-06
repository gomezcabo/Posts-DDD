import { useQuery } from "@tanstack/react-query";
import { PostUseCases } from "../../../domain/use-cases";

export function usePosts() {
  // get the instance from the singleton PostUseCases where they are created only once
  return useQuery(["posts"], () => PostUseCases.GetPostsUseCase.execute());
}

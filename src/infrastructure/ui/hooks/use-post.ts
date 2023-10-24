import { useQuery } from "@tanstack/react-query";
import { Post } from "../../../domain/models/post";
import { PostUseCases } from "../../../domain/use-cases";

export function usePost(postId: Post["id"]) {
  return useQuery(["posts", postId], () => PostUseCases.GetPostByIdUseCase.execute(postId));
}

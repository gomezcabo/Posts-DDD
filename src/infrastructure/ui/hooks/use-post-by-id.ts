import { useQuery } from "@tanstack/react-query";
import { Post } from "../../../domain/entities/post";
import { GetPostByIdUseCase } from "../../../domain/use-cases/get-post-by-id";
import container from "../../../inversify";

export function usePostById(postId: Post["id"]) {
  const getPostByIdUseCase = container.get(GetPostByIdUseCase);
  return useQuery(["posts", postId], () => getPostByIdUseCase.execute(postId));
}

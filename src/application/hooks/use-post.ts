import { useQuery } from "@tanstack/react-query";
import { Post } from "../../domain/models/post";
import { PostService } from "../../domain/services";

export function usePost(postId: Post["id"]) {
  return useQuery(["posts", postId], () => PostService.getPostByIdWithCommentsAndUsers(postId));
}

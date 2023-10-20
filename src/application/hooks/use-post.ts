import { useQuery } from "@tanstack/react-query";
import * as PostService from "../../domain/services/post/post.service";
import { Post } from "../../domain/models/post";

export function usePost(postId: Post["id"]) {
  return useQuery(["posts", postId], () => PostService.getPostByIdWithCommentsAndUsers(postId));
}

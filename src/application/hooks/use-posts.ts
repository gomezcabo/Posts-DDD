import { useQuery } from "@tanstack/react-query";
import * as PostService from "../../domain/services/post/post.service";

export function usePosts() {
  return useQuery(["posts"], PostService.getPosts);
}

import { useQuery } from "@tanstack/react-query";
import { PostService } from "../../domain/services";

export function usePosts() {
  return useQuery(["posts"], PostService.getPosts);
}

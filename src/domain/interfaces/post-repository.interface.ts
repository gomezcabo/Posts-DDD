import { Post } from "../entities/post";

export interface PostRepositoryInterface {
  getPosts(): Promise<Post[]>;
  getPostById(postId: Post["id"]): Promise<Post>;
  createPost(post: Omit<Post, "id">): Promise<Post["id"]>;
}

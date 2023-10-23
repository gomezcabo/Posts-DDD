import { Post } from "../models/post";

export interface PostRepositoryInterface {
  getPosts(): Promise<Post[]>;
  getPostById(postId: number): Promise<Post>;
  createPost(post: Post): Promise<Post["id"]>;
}

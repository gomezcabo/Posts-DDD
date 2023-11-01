import { Post } from "../entities/post";

export interface PostRepositoryInterface {
  getPosts(): Promise<Post[]>;
  getPostById(postId: Post["id"]): Promise<Post>;
  createPost(post: Post): Promise<Post["id"]>;
}

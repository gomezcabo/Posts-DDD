import { Post } from "../entities/post";

export abstract class PostRepositoryInterface {
  abstract getPosts(): Promise<Post[]>;
  abstract getPostById(postId: Post["id"]): Promise<Post>;
  abstract createPost(post: Omit<Post, "id">): Promise<Post["id"]>;
}

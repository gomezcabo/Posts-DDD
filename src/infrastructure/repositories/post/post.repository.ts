import { PostDto, PostDtoSchema } from "./post-dto";
import { Api } from "../../api-fetch/api-fetch";
import { Post } from "../../../domain/models/post";
import { PostRepositoryInterface } from "../../../domain/interfaces/post-repository.interface";

export class PostRepository implements PostRepositoryInterface {
  constructor(private api: Api) {}

  private mapPostDtoToDomain(postDto: PostDto): Post {
    const parsedPostDto = PostDtoSchema.parse(postDto);

    return {
      id: parsedPostDto.id,
      title: parsedPostDto.title,
      body: parsedPostDto.body,
      popularity: parsedPostDto.reactions < 10 ? "low" : parsedPostDto.reactions < 50 ? "medium" : "high",
      tags: parsedPostDto.tags,
    };
  }

  async getPosts(): Promise<Post[]> {
    const postsResponse = await this.api.get<{ posts: PostDto[] }>("/posts");
    return postsResponse.posts.map((post) => this.mapPostDtoToDomain(PostDtoSchema.parse(post)));
  }

  async getPostById(postId: number): Promise<Post> {
    const postResponse = await this.api.get<PostDto>(`/posts/${postId}`);
    return this.mapPostDtoToDomain(postResponse);
  }

  async createPost(post: Post): Promise<Post["id"]> {
    console.log(`Creating post (postId=${post.id})`);
    return 12345;
  }
}

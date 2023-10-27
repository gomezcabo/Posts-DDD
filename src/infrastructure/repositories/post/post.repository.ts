import { ApiAdapter } from "../../api-adapter/api-adapter";
import { Post } from "../../../domain/entities/post";
import { PostRepositoryInterface } from "../../../domain/interfaces/post-repository.interface";
import { PostDto, PostDtoSchema } from "./post-dto";
import { inject, injectable } from "inversify";

@injectable()
export class PostRepository implements PostRepositoryInterface {
  constructor(@inject(ApiAdapter) private apiAdapter: ApiAdapter) {}

  private static mapPostDtoToDomain(postDto: PostDto): Post {
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
    const postsResponse = await this.apiAdapter.get<{ posts: PostDto[] }>("/posts");
    return postsResponse.posts.map(PostRepository.mapPostDtoToDomain);
  }

  async getPostById(postId: number): Promise<Post> {
    const postResponse = await this.apiAdapter.get<PostDto>(`/posts/${postId}`);
    return PostRepository.mapPostDtoToDomain(postResponse);
  }

  async createPost(post: Post): Promise<Post["id"]> {
    console.log(`Creating post (postId=${post.id})`);
    return 12345; // Irrelevant, fake id
  }
}

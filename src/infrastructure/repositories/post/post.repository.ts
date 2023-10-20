import { PostDto, PostDtoSchema } from "./post-dto";
import { apiFetch } from "../../api-fetch/api-fetch";
import { Post } from "../../../domain/models/post";

export function mapPostDtoToDomain(postDto: PostDto): Post {
  const parsedPostDto = PostDtoSchema.parse(postDto);

  return {
    id: parsedPostDto.id,
    title: parsedPostDto.title,
    body: parsedPostDto.body,
    popularity: parsedPostDto.reactions < 10 ? "low" : parsedPostDto.reactions < 50 ? "medium" : "high",
    tags: parsedPostDto.tags,
  };
}

export async function getPosts(): Promise<Post[]> {
  const postsResponse = await apiFetch<{ posts: PostDto[] }>("/posts");
  return postsResponse.posts.map((post) => mapPostDtoToDomain(PostDtoSchema.parse(post)));
}

export async function getPostById(postId: number): Promise<Post> {
  const postResponse = await apiFetch<PostDto>(`/posts/${postId}`);
  return mapPostDtoToDomain(postResponse);
}

export async function createPost(post: Post): Promise<Post["id"]> {
  console.log(`Creating post (postId=${post.id})`);
  return 12345;
}

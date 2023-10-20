import { PostDto, PostDtoSchema } from "./post-dto";
import { apiFetch } from "../../api-fetch/api-fetch";
import { Post } from "../../../domain/models/post";

export function mapPostDtoToDomain(postDto: PostDto): Post {
  return {
    id: postDto.id,
    title: postDto.title,
    body: postDto.body,
    popularity: postDto.reactions < 10 ? "low" : postDto.reactions < 50 ? "medium" : "high",
    tags: postDto.tags,
  };
}

export async function getPosts(): Promise<Post[]> {
  const postsResponse = await apiFetch<{ posts: PostDto[] }>("/posts");
  return postsResponse.posts.map((post) => mapPostDtoToDomain(PostDtoSchema.parse(post)));
}

export async function getPostById(postId: number): Promise<Post> {
  const postResponse = await apiFetch<PostDto[]>(`/posts/${postId}`);
  return mapPostDtoToDomain(PostDtoSchema.parse(postResponse));
}

export async function createPost(post: Post): Promise<Post["id"]> {
  console.log(`Creating post (postId=${post.id})`);
  return 12345;
}

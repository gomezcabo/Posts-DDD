import { Container } from "inversify";
import { ApiAdapter } from "./infrastructure/api-adapter/api-adapter";
import { PostRepository } from "./infrastructure/repositories/post/post.repository";
import { GetPostByIdUseCase } from "./domain/use-cases/get-post-by-id";
import { CommentRepository } from "./infrastructure/repositories/comment/comment.repository";
import { UserRepository } from "./infrastructure/repositories/user/user.repository";
import { GetPostsUseCase } from "./domain/use-cases/get-posts";
import { CreatePostUseCase } from "./domain/use-cases/create-post";

const container = new Container();

container.bind<ApiAdapter>(ApiAdapter).to(ApiAdapter);

container.bind(PostRepository).to(PostRepository);
container.bind(CommentRepository).to(CommentRepository);
container.bind(UserRepository).to(UserRepository);

container.bind(GetPostByIdUseCase).to(GetPostByIdUseCase);
container.bind(GetPostsUseCase).to(GetPostsUseCase);
container.bind(CreatePostUseCase).to(CreatePostUseCase);

export default container;

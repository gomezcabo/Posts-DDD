import { Container } from "inversify";
import { ApiAdapter } from "./infrastructure/api-adapter/api-adapter";
import { PostRepository } from "./infrastructure/repositories/post/post.repository";
import { GetPostByIdUseCase } from "./domain/use-cases/get-post-by-id";

const container = new Container();

container.bind<ApiAdapter>(ApiAdapter).to(ApiAdapter);
container.bind<PostRepository>(PostRepository).to(PostRepository);
container.bind<GetPostByIdUseCase>(GetPostByIdUseCase).to(GetPostByIdUseCase);

export default container;

import { User } from "../entities/user";

export abstract class UserRepositoryInterface {
  abstract getUserById(userId: number): Promise<User>;
}

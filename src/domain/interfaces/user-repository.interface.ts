import { User } from "../entities/user";

export interface UserRepositoryInterface {
  getUserById(userId: number): Promise<User>;
}

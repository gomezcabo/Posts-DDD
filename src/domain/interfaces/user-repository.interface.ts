import { User } from "../entities/user";

export interface UserRepositoryInterface {
  getUserById(userId: User["id"]): Promise<User>;
}

import { User } from "../models/user";

export interface UserRepositoryInterface {
  getUserById(userId: number): Promise<User>;
}

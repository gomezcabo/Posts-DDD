import { UserRepository } from "../../../infrastructure/repositories";
import { User } from "../../models/user";

export function getUserById(userId: number): Promise<User> {
  return UserRepository.getUserById(userId);
}

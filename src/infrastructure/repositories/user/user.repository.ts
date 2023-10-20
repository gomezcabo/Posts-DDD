import { apiFetch } from "../../api-fetch/api-fetch";
import { UserDto, UserDtoSchema } from "./user-dto";
import { User } from "../../../domain/models/user";

export function mapUserDtoToDomain(userDto: UserDto): User {
  return {
    id: userDto.id,
    username: userDto.username,
    email: userDto.email,
    fullName: `${userDto.firstName} ${userDto.lastName}`,
    age: userDto.age,
    avatar: userDto.image,
  };
}

export async function getUserById(userId: number): Promise<User> {
  const userResponse = await apiFetch<UserDto[]>(`/users/${userId}`);
  return mapUserDtoToDomain(UserDtoSchema.parse(userResponse));
}

import { apiFetch } from "../../api-fetch/api-fetch";
import { UserDto, UserDtoSchema } from "./user-dto";
import { User } from "../../../domain/models/user";

export function mapUserDtoToDomain(userDto: UserDto): User {
  const parsedUserDto = UserDtoSchema.parse(userDto);

  return {
    id: parsedUserDto.id,
    username: parsedUserDto.username,
    email: parsedUserDto.email,
    fullName: `${parsedUserDto.firstName} ${parsedUserDto.lastName}`,
    age: parsedUserDto.age,
    avatar: parsedUserDto.image,
  };
}

export async function getUserById(userId: number): Promise<User> {
  const userResponse = await apiFetch<UserDto[]>(`/users/${userId}`);
  return mapUserDtoToDomain(UserDtoSchema.parse(userResponse));
}

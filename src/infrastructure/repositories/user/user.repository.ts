import { ApiAdapter } from "../../api-adapter/api-adapter";
import { User } from "../../../domain/entities/user";
import { UserDto, UserDtoSchema } from "./user-dto";
import { UserRepositoryInterface } from "../../../domain/interfaces/user-repository.interface";

export class UserRepository implements UserRepositoryInterface {
  constructor(private apiAdapter: ApiAdapter) {}

  private static mapUserDtoToDomain(userDto: UserDto): User {
    const parsedUserDto = UserDtoSchema.parse(userDto);

    return {
      id: parsedUserDto.id,
      username: parsedUserDto.username,
      email: parsedUserDto.email,
      age: parsedUserDto.age,
      avatar: parsedUserDto.image,
      fullName: `${parsedUserDto.firstName} ${parsedUserDto.lastName}`,
    };
  }

  async getUserById(userId: User["id"]): Promise<User> {
    const userResponse = await this.apiAdapter.get<UserDto>(`/users/${userId}`);
    return UserRepository.mapUserDtoToDomain(userResponse);
  }
}

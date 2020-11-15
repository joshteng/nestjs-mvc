import { UserDto } from "src/users/dto/user.dto";
import { User } from "src/users/entities/user.entity";

export function toUserDto(user: User): UserDto {
  const { id, email } = user;
  let userDto: UserDto = { id, email, };
  return userDto;
}
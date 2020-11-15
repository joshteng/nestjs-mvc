import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {
  @IsNotEmpty()
  readonly id: Number;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @Exclude()
  readonly password: string;
}

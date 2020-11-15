import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return this.usersService.createUser(createUserDto)
    } catch (err) {
      console.log(err)
    }
  }
}

import { Body, Controller, Logger, Post, Request, Res } from '@nestjs/common';
import { toUserDto } from 'src/common/mapper';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name)

  constructor(private readonly usersService: UsersService) { }

  @Post()
  async createUser(@Request() req, @Res() res, @Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.createUser(createUserDto)

    if (user) {
      const userDto = toUserDto(user)
      req.logIn(userDto, (err) => {
        if (err) {
          this.logger.debug(err)
        }
      })
    }

    res.redirect('/')
  }
}

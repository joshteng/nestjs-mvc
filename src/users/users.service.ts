import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toUserDto } from 'src/common/mapper';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findUserByEmail(email): Promise<any> {
    const user = await this.userRepository.findOne({
      where: {
        email: email
      }
    })

    return user
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this.userRepository.create(createUserDto)
    await this.userRepository.save(user)

    return toUserDto(user)
  }
}

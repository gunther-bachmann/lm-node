import { Controller, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { CreateUserDto } from '@/users/dtos/CreateUser.dto';
import { UpdateUserDto } from '@/users/dtos/UpdateUser.dto';
import { UsersService } from '@/users/users.service';
import { User } from '@/typeorm/entities/User';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this.usersService.findUsers();
    return users;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersService.createUsers(createUserDto);
    return newUser;
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<void> {
    await this.usersService.updateUser({ ...updateUserDto, id });
  }

  @Get(':id')
  async getUserById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<User | null> {
    const user = await this.usersService.getUser(id);
    return user;
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.usersService.deleteUser(id);
  }
}

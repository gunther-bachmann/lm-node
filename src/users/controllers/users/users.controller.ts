import { Controller, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { CreateUserDto } from '../../../users/dtos/CreateUser.dto';
import { UpdateUserDto } from '../../../users/dtos/UpdateUser.dto';
import { UsersService } from '../../../users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.usersService.findUsers();
    return users;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const newUser = this.usersService.createUsers(createUserDto);
    return newUser;
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.usersService.updateUser({ ...updateUserDto, id });
  }

  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.getUser(id);
    return user;
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.usersService.deleteUser(id);
  }
}

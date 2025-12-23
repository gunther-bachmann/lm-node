import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/typeorm/entities/User';
import { Group } from '@/typeorm/entities/Group';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProvider } from './users.provider';

@Module({
  imports: [TypeOrmModule.forFeature([User, Group])],
  controllers: [UsersController],
  providers: [usersProvider, UsersService],
  exports: [UsersService],
})
export class UsersModule {}

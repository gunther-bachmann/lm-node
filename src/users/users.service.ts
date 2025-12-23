import { Injectable, Inject } from '@nestjs/common';
import { User } from '@/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository, DataSource, UpdateResult, DeleteResult } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectDataSource() private dataSource: DataSource,
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async findUsers(): Promise<User[]> {
    return this.userRepository.find({ relations: { groups: true } });
  }

  async createUsers(userDetails: CreateUserParams): Promise<User> {
    const newUser = this.userRepository.create(userDetails);

    return this.userRepository.save(newUser);
  }

  async createMultipleUsersTX(users: CreateUserParams[]): Promise<void> {
    this.dataSource.transaction('SERIALIZABLE', async (manager) => {
      await Promise.all(
        users.map((user) => {
          const newUser = this.userRepository.create(user);
          return manager.save(newUser);
        }),
      );
    });
  }

  async updateUser(updateUserDetails: UpdateUserParams): Promise<UpdateResult> {
    return this.userRepository.update(
      { id: updateUserDetails.id },
      { ...updateUserDetails },
    );
  }

  async getUser(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  deleteUser(id: number): Promise<DeleteResult> {
    return this.userRepository.delete({ id });
  }
}

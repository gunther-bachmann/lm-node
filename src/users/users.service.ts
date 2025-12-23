import { Injectable, Inject } from '@nestjs/common';
import { User } from '@/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository, DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectDataSource() private dataSource: DataSource,
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find({ relations: { groups: true } });
  }

  createUsers(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create(userDetails);

    return this.userRepository.save(newUser);
  }

  createMultipleUsersTX(users: CreateUserParams[]) {
    this.dataSource.transaction('SERIALIZABLE', async (manager) => {
      await Promise.all(
        users.map((user) => {
          const newUser = this.userRepository.create(user);
          return manager.save(newUser);
        }),
      );
    });
  }

  updateUser(updateUserDetails: UpdateUserParams) {
    return this.userRepository.update(
      { id: updateUserDetails.id },
      { ...updateUserDetails },
    );
  }

  getUser(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}

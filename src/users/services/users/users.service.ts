import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../../typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  createUsers(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
    });

    return this.userRepository.save(newUser);
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

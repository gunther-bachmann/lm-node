import { Injectable, Inject } from '@nestjs/common';
import { Group } from '@/typeorm/entities/Group';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class GroupsService {
  constructor(
    @Inject('GROUP_REPOSITORY') private groupRepository: Repository<Group>,
  ) {}

  async findGroups(): Promise<Group[]> {
    return this.groupRepository.find();
  }

  async getGroup(id: number): Promise<Group | null> {
    return this.groupRepository.findOneBy({ id });
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return this.groupRepository.delete({ id });
  }
}

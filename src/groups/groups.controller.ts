import { Controller, Get, Param } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Group } from '../typeorm/entities/Group'

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

     @Get()
     findAll(): Promise<Group[]> {
       return this.groupsService.findGroups();
     }

     @Get(':id')
     findOne(@Param('id') id: number): Promise<Group | null> {
       return this.groupsService.getGroup(id);
     }

}

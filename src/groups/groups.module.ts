import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../typeorm/entities/Group';
import { GroupsProvider } from './groups.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [GroupsService, GroupsProvider],
  controllers: [GroupsController],
  exports:[GroupsService],
})
export class GroupsModule {}

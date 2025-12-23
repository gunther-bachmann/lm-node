import { DataSource } from 'typeorm';
import { Group } from '@/typeorm/entities/Group';

export const GroupsProvider = {
  provide: 'GROUP_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Group),
  inject: [DataSource],
};

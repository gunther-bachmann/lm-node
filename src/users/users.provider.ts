import { DataSource } from 'typeorm';
import { User } from '@/typeorm/entities/User';

export const usersProvider = {
  provide: 'USER_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
  inject: [DataSource],
};

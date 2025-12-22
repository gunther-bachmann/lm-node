import { DataSource } from 'typeorm';
import { User } from '@/typeorm/entities/User';

export const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DataSource],
  },
];

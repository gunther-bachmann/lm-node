import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from '@/typeorm/entities/User';
import { DataSource } from 'typeorm';

describe('UsersService', () => {
  let service: UsersService;
  const davidBowieEntry: User = {
    id: 1,
    firstName: 'david',
    lastName: 'bowie',
    age: 78,
    groups: [],
  };

  const mockRepo = {
    findOneBy: jest.fn().mockResolvedValue(davidBowieEntry),
  };

  const mockDataSource: Partial<DataSource> = {
    transaction: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: 'USER_REPOSITORY', useValue: mockRepo },
        { provide: DataSource, useValue: mockDataSource },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('gets the user the repository returns for this id', async () => {
    expect(await service.getUser(1)).toStrictEqual(davidBowieEntry);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from '@/typeorm/entities/User';

describe('UsersService', () => {
  let service: UsersService;
  const davidBowieEntry: User = { id: 1, firstName: 'david', lastName: 'bowie', age: 78 };

  const mockRepo = {
    findOneBy: jest.fn().mockResolvedValue(davidBowieEntry),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: 'USER_REPOSITORY', useValue: mockRepo },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('gets the user the repository returns for this id', async () => {
    expect(await service.getUser(1)).toStrictEqual(davidBowieEntry);
  });
});

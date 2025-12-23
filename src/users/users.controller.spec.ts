import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '@/users/users.service';
import { User } from '@/typeorm/entities/User';

describe('UsersController', () => {
  let controller: UsersController;

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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: 'USER_REPOSITORY', useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('returns the user the repo finds', async () => {
    expect(await controller.getUserById(1)).toStrictEqual(davidBowieEntry);
  });
});

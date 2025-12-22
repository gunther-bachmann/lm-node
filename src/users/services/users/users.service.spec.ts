import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockRepo = {
    findOneBy: jest.fn().mockResolvedValue({ id: 1, username: 'david' }),
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

  it('should be defined', async () => {
    expect(await service.getUser(1)).toStrictEqual({
      id: 1,
      username: 'david',
    });
  });
});

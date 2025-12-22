import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../../services/users/users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const mockRepo = {
    findOneBy: jest.fn().mockResolvedValue({ id: 1, name: 'david' }),
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

  it('should be defined', async () => {
    expect(await controller.getUserById(1)).toStrictEqual({
      id: 1,
      name: 'david',
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { Group } from '@/typeorm/entities/Group';

describe('GroupsController', () => {
  let controller: GroupsController;

  const bandEntry: Group = { id: 1, name: 'band' };

  const mockRepo = {
    findOneBy: jest.fn().mockResolvedValue(bandEntry),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupsController],
      providers: [
        GroupsService,
        { provide: 'GROUP_REPOSITORY', useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<GroupsController>(GroupsController);
  });

  it('should be defined', async () => {
    expect(await controller.findOne(1)).toStrictEqual(bandEntry);
  });
});

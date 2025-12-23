import { Test, TestingModule } from '@nestjs/testing';
import { GroupsService } from './groups.service';
import { Group } from '@/typeorm/entities/Group';

describe('GroupsService', () => {
  let service: GroupsService;

  const bandEntry: Group = { id: 1, name: 'band' };

  const mockRepo = {
    findOneBy: jest.fn().mockResolvedValue(bandEntry),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GroupsService,
        { provide: 'GROUP_REPOSITORY', useValue: mockRepo },
      ],
    }).compile();

    service = module.get<GroupsService>(GroupsService);
  });

  it('should be defined', async () => {
    expect(await service.getGroup(1)).toStrictEqual(bandEntry);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { Cv } from './cv';

describe('Cv', () => {
  let provider: Cv;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Cv],
    }).compile();

    provider = module.get<Cv>(Cv);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

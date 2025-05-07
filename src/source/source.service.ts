import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Source } from 'src/entity/source.entity';
import { Repository } from 'typeorm';
import { sourceDto } from './dto/source.dto';

@Injectable()
export class SourceService {
  constructor(
    @InjectRepository(Source) private sourceRepo: Repository<Source>,
  ) {}

  async getSource() {
    const data = await this.sourceRepo.find();
    return {
      status: 200,
      success: true,
      data: data,
    };
  }

  async createSource(dto: sourceDto) {
    const source = this.sourceRepo.create(dto);
    const data = await this.sourceRepo.save(source);

    return {
      status: 200,
      success: true,
      data: data,
    };
  }
}

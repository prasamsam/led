import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/entity/status.entity';
import { Repository } from 'typeorm';
import { statusDto } from './dto/status.dto';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status) private statusRepo: Repository<Status>,
  ) {}

  async getStatus() {
    const data = await this.statusRepo.find();
    return {
      status: 200,
      success: true,
      data: data,
    };
  }

  async createStatus(dto: statusDto) {
    const status = this.statusRepo.create(dto);
    const data = await this.statusRepo.save(status);

    return {
      status: 200,
      success: true,
      data: data,
    };
  }
}

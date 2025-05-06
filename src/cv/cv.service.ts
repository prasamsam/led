import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cv } from 'src/entity/cv.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CvService {
  constructor(@InjectRepository(Cv) private cvRepo: Repository<Cv>) {}
  async getCvData() {
    const data = await this.cvRepo.find();
    return {
      status: 200,
      success: true,
      data: data,
    };
  }
}

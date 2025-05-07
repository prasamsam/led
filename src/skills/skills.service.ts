import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skills } from 'src/entity/skill.entity';
import { Repository } from 'typeorm';
import { skillsDto } from './dto/skills.dto';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skills) private skillRepo: Repository<Skills>,
  ) {}

  async getSkills() {
    const data = await this.skillRepo.find();
    return {
      status: 200,
      success: true,
      data: data,
    };
  }

  async getPrimarySkills() {
    const data = await this.skillRepo.find({ where: { type: 'P' } });
    return {
      status: 200,
      success: true,
      data: data,
    };
  }

  async getSecondarySkills() {
    const data = await this.skillRepo.find({ where: { type: 'S' } });
    return {
      status: 200,
      success: true,
      data: data,
    };
  }

  async createSkills(dto: skillsDto) {
    const skill = this.skillRepo.create(dto as any);
    const data = await this.skillRepo.save(skill);

    return {
      status: 201,
      success: true,
      data: data,
    };
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { skillsDto } from './dto/skills.dto';

@Controller('skills')
export class SkillsController {
  constructor(private skillsService: SkillsService) {}

  @Get()
  getSkills() {
    return this.skillsService.getSkills();
  }

  @Get('/primary-skills')
  getPrimarySkills() {
    return this.skillsService.getPrimarySkills();
  }

  @Get('/secondary-skills')
  getSecondarySkills() {
    return this.skillsService.getSecondarySkills();
  }

  @Post()
  createSkill(@Body() dto: skillsDto) {
    return this.skillsService.createSkills(dto);
  }
}

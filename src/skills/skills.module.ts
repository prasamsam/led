import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skills } from 'src/entity/skill.entity';
import { SkillsController } from './skills.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Skills])],
  providers: [SkillsService],
  controllers: [SkillsController],
  exports: [SkillsService],
})
export class SkillsModule {}

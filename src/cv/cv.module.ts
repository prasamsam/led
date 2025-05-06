import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cv } from 'src/entity/cv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cv])],
  providers: [CvService],
  controllers: [CvController],
  exports: [CvService],
})
export class CvModule {}

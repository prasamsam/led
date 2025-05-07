import { Module } from '@nestjs/common';
import { SourceService } from './source.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Source } from 'src/entity/source.entity';
import { SourceController } from './source.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Source])],
  providers: [SourceService],
  controllers: [SourceController],
  exports: [SourceService],
})
export class SourceModule {}

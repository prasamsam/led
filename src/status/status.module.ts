import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from 'src/entity/status.entity';
import { StatusController } from './status.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Status])],
  providers: [StatusService],
  controllers: [StatusController],
  exports: [StatusService],
})
export class StatusModule {}

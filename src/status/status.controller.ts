import { Body, Controller, Get, Post } from '@nestjs/common';
import { StatusService } from './status.service';
import { statusDto } from './dto/status.dto';

@Controller('status')
export class StatusController {
  constructor(private statusService: StatusService) {}

  @Get()
  getStatus() {
    return this.statusService.getStatus();
  }

  @Post()
  createStatus(@Body() dto: statusDto) {
    return this.statusService.createStatus(dto);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { SourceService } from './source.service';
import { sourceDto } from './dto/source.dto';

@Controller('source')
export class SourceController {
  constructor(private sourceService: SourceService) {}

  @Get()
  getSource() {
    return this.sourceService.getSource();
  }

  @Post()
  createSource(@Body() dto: sourceDto) {
    return this.sourceService.createSource(dto);
  }
}

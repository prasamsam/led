import { Controller, Get } from '@nestjs/common';
import { CvService } from './cv.service';

@Controller('cv')
export class CvController {
  constructor(private cvService: CvService) {}

  @Get()
  getCvData() {
    return this.cvService.getCvData();
  }
}

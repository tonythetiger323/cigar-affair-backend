import { Controller, Get } from '@nestjs/common';
import { JournalsService } from './journals.service';

@Controller()
export class JournalsController {
  constructor(private readonly journalsService: JournalsService) {}

  @Get()
  getHello(): string {
    return this.journalsService.getHello();
  }
}

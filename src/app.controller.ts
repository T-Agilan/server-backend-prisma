// server/src/modules/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getData(): string {
    return 'This is data from Nest.js backend!';
  }
}

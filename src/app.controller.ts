import { Controller, Get } from '@nestjs/common';
import { AppService, type HealthCheckResponse } from './app.service.js';

@Controller('health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): HealthCheckResponse {
    return this.appService.getHealthStatus();
  }
}



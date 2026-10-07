import { Injectable } from '@nestjs/common';

export interface HealthCheckResponse {
  status: string;
  service: string;
  timestamp: string;
  uptime: number;
}

@Injectable()
export class AppService {
  getHealthStatus(): HealthCheckResponse {
    return {
      status: 'ok',
      service: 'NovaBank Virtual Simulator API',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}


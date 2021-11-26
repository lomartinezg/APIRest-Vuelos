import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'SuperFlights API v1 - Microservices with NestJs';
  }
}

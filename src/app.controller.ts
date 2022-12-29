import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist';
import { AppService } from './app.service';

@ApiTags('Status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Visualizar status da aplicação',
  })
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}

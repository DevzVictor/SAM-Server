import { Controller, Get, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AppService } from './app.service';

@ApiTags('Status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Visualizar status da aplicação',
  })
  getHello(@Req() req: Request) {
    const baseUrl = req.protocol + '://' + req.get('host');
    return this.appService.getAppStatus(baseUrl);
  }
}

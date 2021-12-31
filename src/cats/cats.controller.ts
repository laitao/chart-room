import { CatsService } from './cats.service';
import {
  Controller,
  Get,
  HostParam,
  HttpCode,
  Param,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get(':id')
  // @Redirect('http://localhost:3000/hello', 301)
  getCats(
    @Query() query: any,
    @Param() params,
    @HostParam('account') account: string,
  ): string {
    console.log('request=', query, params.id, account);
    return this.catsService.getCats();
  }
}

import { Injectable, Req } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCats(): string {
    return 'I am cat';
  }
}

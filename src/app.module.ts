import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule], // 导入模块的列表,这些模块导出了此模块中所需提供者
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService], // 有nest注入器实例化的提供者,并且至少可以在整个模块中共享
})
export class AppModule {}

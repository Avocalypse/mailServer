import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { filesPath } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MulterModule.register({ dest: filesPath })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
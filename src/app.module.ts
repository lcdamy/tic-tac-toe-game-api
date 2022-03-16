import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import config from '../ormconfig';
import { TitactoeModule } from './titactoe.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), TitactoeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitactoeService } from './titactoe.service';
import { TitactoeController } from './titactoe.controller';
import { Tictactoe } from './entity/tictactoe';

@Module({
    imports: [TypeOrmModule.forFeature([Tictactoe])],
    providers: [TitactoeService],
    controllers: [TitactoeController],
})
export class TitactoeModule { }

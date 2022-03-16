import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { TitactoeService } from './titactoe.service';

@Controller()
export class TitactoeController {
    constructor(private readonly titactoeService: TitactoeService) { }

    @Get()
    getBoard(@Query('board') playing): string {
        if (playing == undefined) {
            throw new BadRequestException();
        }
        return this.titactoeService.playGame(playing);
    }
}

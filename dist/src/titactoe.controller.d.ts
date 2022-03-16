import { TitactoeService } from './titactoe.service';
export declare class TitactoeController {
    private readonly titactoeService;
    constructor(titactoeService: TitactoeService);
    getBoard(playing: any): string;
}

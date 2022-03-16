import { Tictactoe } from './entity/tictactoe';
import { Repository } from 'typeorm';
export declare class TitactoeService {
    private tictactoeRepository;
    constructor(tictactoeRepository: Repository<Tictactoe>);
    mynewboard: string;
    playGame(query: any): any;
    queryValidity(query: any): boolean;
    countChar(str: any, char: any): number;
    play(board: string): string;
    findPreviousBoard(): unknown;
    savingBoard(board: any): any;
}

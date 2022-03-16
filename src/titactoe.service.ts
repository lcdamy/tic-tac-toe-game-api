import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tictactoe } from './entity/tictactoe';
import { Repository } from 'typeorm';

@Injectable()
export class TitactoeService {

    constructor(
        @InjectRepository(Tictactoe)
        private tictactoeRepository: Repository<Tictactoe>,
    ) { }

    mynewboard = "";

    playGame(query): any {
        if (!this.queryValidity(query)) {
            throw new BadRequestException();
        }
        return this.play(query);
    }

    queryValidity(query): boolean {
        if (!(query.length === 0 || query.length === 9)) {
            return false;
        }
        var isValidString = query.match(/^[XxOo\s>]*$/) !== null;;
        if (!isValidString) {
            return false;
        }
        var x_count = this.countChar(query, 'x');
        var o_count = this.countChar(query, 'o');

        if (!((x_count == 0 && o_count == 0)
            || (x_count == 1 && o_count == 1)
            || (x_count == 2 && o_count == 2)
            || (x_count == 3 && o_count == 3)
            || (x_count == 4 && o_count == 4)
            || ((x_count == 1 && o_count == 0) || (o_count == 1 && x_count == 0))
            || ((x_count == 2 && o_count == 1) || (o_count == 2 && x_count == 1))
            || ((x_count == 3 && o_count == 2) || (o_count == 3 && x_count == 2))
            || ((x_count == 4 && o_count == 3) || (o_count == 4 && x_count == 3))
            || ((x_count == 5 && o_count == 4) || (o_count == 5 && x_count == 4)))
        ) {
            return false;
        }
        return true;
    }

    countChar(str: any, char: any) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i).toLowerCase() == char) {
                count += 1;
            }
        }
        return count;
    }

    play(board: string) {
        let myboard = "";
        var empty_count = this.countChar(board, ' ');
        if (empty_count === 0) {
            let cleanBoard = this.tictactoeRepository.clear();
            myboard = "o";
        } else {
            let mytoarray = board.split("");
            mytoarray[board.indexOf(" ")] = "o";
            myboard = mytoarray.join("");
        }
        this.savingBoard(myboard)
        return myboard;
    }

    async findPreviousBoard() {
        let lastboard = await this.tictactoeRepository.findOne({
            order: { id: 'DESC' }
        });
        return lastboard.current_status;
    }

    savingBoard(board) {
        const newcurrent = this.tictactoeRepository.create({ current_status: board });
        if (this.tictactoeRepository.save(newcurrent)) {
            return board;
        }
    }

}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitactoeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tictactoe_1 = require("./entity/tictactoe");
const typeorm_2 = require("typeorm");
let TitactoeService = class TitactoeService {
    constructor(tictactoeRepository) {
        this.tictactoeRepository = tictactoeRepository;
        this.mynewboard = "";
    }
    playGame(query) {
        if (!this.queryValidity(query)) {
            throw new common_1.BadRequestException();
        }
        return this.play(query);
    }
    queryValidity(query) {
        if (!(query.length === 0 || query.length === 9)) {
            return false;
        }
        var isValidString = query.match(/^[XxOo\s>]*$/) !== null;
        ;
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
            || ((x_count == 5 && o_count == 4) || (o_count == 5 && x_count == 4)))) {
            return false;
        }
        return true;
    }
    countChar(str, char) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i).toLowerCase() == char) {
                count += 1;
            }
        }
        return count;
    }
    play(board) {
        let myboard = "";
        var empty_count = this.countChar(board, ' ');
        if (empty_count === 0) {
            let cleanBoard = this.tictactoeRepository.clear();
            myboard = "o";
        }
        else {
            let mytoarray = board.split("");
            mytoarray[board.indexOf(" ")] = "o";
            myboard = mytoarray.join("");
        }
        this.savingBoard(myboard);
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
};
TitactoeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tictactoe_1.Tictactoe)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TitactoeService);
exports.TitactoeService = TitactoeService;
//# sourceMappingURL=titactoe.service.js.map
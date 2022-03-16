"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticmigration1647431177593 = void 0;
class ticmigration1647431177593 {
    constructor() {
        this.name = 'ticmigration1647431177593';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tictactoe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "current_status" varchar NOT NULL)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "tictactoe"`);
    }
}
exports.ticmigration1647431177593 = ticmigration1647431177593;
//# sourceMappingURL=1647431177593-ticmigration.js.map
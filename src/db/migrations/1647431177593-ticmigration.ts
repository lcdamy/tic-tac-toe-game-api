import {MigrationInterface, QueryRunner} from "typeorm";

export class ticmigration1647431177593 implements MigrationInterface {
    name = 'ticmigration1647431177593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tictactoe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "current_status" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tictactoe"`);
    }

}

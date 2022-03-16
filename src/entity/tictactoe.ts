import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tictactoe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    current_status: string;

}
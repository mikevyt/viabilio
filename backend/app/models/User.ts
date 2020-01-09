import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('users')
export default class User {
    @PrimaryColumn()
    id: string;

    @Column()
    userName: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    // @Column()
    // avatar: string;

    // @Column()
    // createdAt: Date;

    // @Column()
    // updatedAt: Date;

    // @Column()
    // bannedAt: Date;

    // @Column()
    // enterpriseId: number;

    // @Column()
    // signupSource: string;
}

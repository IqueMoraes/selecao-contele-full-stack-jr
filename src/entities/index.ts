import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
    id:string;

  @Column({ length: 128 })
    name: string;

  @Column({ length: 128, unique: true })
    email: string;

  @Column({ length: 128 })
    password: string;
}

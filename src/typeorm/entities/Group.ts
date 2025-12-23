import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'groups' })
export class Group {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;
}

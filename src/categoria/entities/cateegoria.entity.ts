import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categorias_tb')
export class Categoria {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nome!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price!: number;
  @Column({ default: true })
  ativo!: boolean;

  @UpdateDateColumn()
  data!: Date;
}

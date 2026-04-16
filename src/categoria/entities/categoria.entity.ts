import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';

@Entity('categorias_tb')
export class Categoria {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nome!: string;

  @Column({ default: true })
  ativo!: boolean;

  @UpdateDateColumn()
  data!: Date;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto!: Produto[];
}

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, nullable: false })
  nome!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  preco!: number;

  @Column()
  estoque!: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria!: Categoria;
}

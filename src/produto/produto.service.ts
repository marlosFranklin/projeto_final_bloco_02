import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';
import { Categoria } from '../categoria/entities/categoria.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,

    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  //GET ALL
  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({
      relations: ['categoria'],
    });
  }

  //GET BY ID
  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: ['categoria'],
    });
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    return produto;
  }

  async create(produto: Produto): Promise<Produto> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id: produto.categoria.id },
    });

    if (!categoria) {
      throw new Error('Categoria não encontrada');
    }

    produto.categoria = categoria;

    return this.produtoRepository.save(produto);
  }

  // UPDATE
  async update(id: number, produto: Produto): Promise<Produto> {
    await this.produtoRepository.update(id, produto);

    return this.findOne(id);
  }

  // DELETE
  async delete(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}

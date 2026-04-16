import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Categoria } from './entities/cateegoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  //Buscar todos
  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  //Buscar por id
  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id },
    });
    if (!categoria)
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);

    return categoria;
  }

  //buscar por categoria
  async findAllByStatus(ativo: boolean): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      where: {
        ativo: ativo,
      },
    });
  }

  // criar categoria
  async create(cateegoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(cateegoria);
  }

  // atualizar categoria

  async update(cateegoria: Categoria): Promise<Categoria> {
    await this.findOne(cateegoria.id);
    return await this.categoriaRepository.save(cateegoria);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return await this.categoriaRepository.delete(id);
  }
}

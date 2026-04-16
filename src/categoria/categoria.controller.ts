import { Controller, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './entities/cateegoria.entity';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: number) {
    return this.categoriaService.findOne(id);
  }

  @Get('/ativo/:status')
  findByativo(@Param('status') status: string) {
    const ativo = status === 'true';

    return this.categoriaService.findAllByStatus(ativo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria) {
    return this.categoriaService.create(categoria);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updtae(@Body() categoria: Categoria) {
    return this.categoriaService.update(categoria);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.delete(id);
  }
}

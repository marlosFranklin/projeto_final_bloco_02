import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { ProdutoService } from './produto.service';
import { Produto } from './entities/produto.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  // GET
  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  // GET BY ID
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.produtoService.findOne(id);
  }

  // POST
  @Post()
  create(@Body() produto: Produto) {
    return this.produtoService.create(produto);
  }

  // PUT
  @Put(':id')
  update(@Param('id') id: number, @Body() produto: Produto) {
    return this.produtoService.update(id, produto);
  }

  // DELETE
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.produtoService.delete(id);
  }
}

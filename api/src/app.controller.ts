import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { AppService } from './app.service';

export class BookDto {
  title: string;
  author: string;
  genre: string;
  price: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('book')
  async getBooks() {
    return this.appService.getBooks();
  }

  @Get('book/:id')
  async getBook(@Param('id') id: number) {
    console.log('id', id);
    return await this.appService.getBook(id);
  }

  @Post('book')
  async createBook(@Body() book: BookDto) {
    return this.appService.createBook(book);
  }

  @Put('book/:id')
  async updateBook(@Body() book: BookDto, @Param('id') id: number) {
    return this.appService.updateBook(id, book);
  }

  @Delete('book/:id')
  async deleteBook(@Param('id') id: number) {
    return await this.appService.deleteBook(id);
  }
}

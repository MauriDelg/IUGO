import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { MostRepeatedWordRequest } from './domain/interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('fibonacci/:number')
  fibonacci(@Param('number', ParseIntPipe) num: number): number {
    return this.appService.fibonacci(num);
  }

  @Post('most-repeated-letter')
  mostRepeatedLetterIndex(@Body() request: MostRepeatedWordRequest): number {
    return this.appService.firstMostRepeatedLetter(request.word);
  }

  @Post('par-impar/:number')
  parImpar(@Param('number', ParseIntPipe) num: number): string {
    return this.appService.parOImpar(num);
  }
}

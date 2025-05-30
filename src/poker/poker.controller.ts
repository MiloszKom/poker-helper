import { Body, Controller, Get, Post } from '@nestjs/common';
import { PokerService } from './poker.service';
import { BestMoveDto } from './dtos/BestMove.dto';

@Controller('poker')
export class PokerController {
  constructor(private readonly pokerService: PokerService) {}

  @Post()
  suggestBestMove(@Body() body: BestMoveDto) {
    const suggestion = this.pokerService.suggestMove(body);

    return {
      statusCode: 200,
      suggestion,
    };
  }
}

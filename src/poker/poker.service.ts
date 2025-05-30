import { Injectable } from '@nestjs/common';
import { BestMoveDto } from './dtos/BestMove.dto';
import { winningOddsForPlayer } from 'poker-evaluator';

@Injectable()
export class PokerService {
  suggestMove(body: BestMoveDto) {
    const {
      playerHand,
      communityCards = [],
      pot,
      betToCall,
      totalPlayers,
    } = body;

    const odds = winningOddsForPlayer(
      playerHand,
      communityCards || [],
      totalPlayers,
      1000,
    );

    const winRate = odds.winRate;
    const expectedValue = (pot + betToCall) * winRate - betToCall;

    if (expectedValue < -5) return 'fold';
    if (expectedValue >= -5 && expectedValue < 10) return 'call';
    if (expectedValue >= 10) return 'raise';

    return 'call';
  }
}

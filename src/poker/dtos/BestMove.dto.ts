import { IsNotEmpty, IsOptional } from 'class-validator';

export class BestMoveDto {
  @IsNotEmpty()
  playerHand: string[];

  @IsOptional()
  communityCards: string[];

  @IsNotEmpty()
  pot: number;

  @IsNotEmpty()
  betToCall: number;

  @IsNotEmpty()
  totalPlayers: number;
}

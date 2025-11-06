import { IsString, MinLength } from 'class-validator';

export class NewMessageDto {
  @IsString()
  @MinLength(2)
  message: string;
}

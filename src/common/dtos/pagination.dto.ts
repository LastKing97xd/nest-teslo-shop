import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    description: 'Number of items to return',
    default: 10,
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number) //enableImplicitConversion: true in main.ts
  limit?: number;

  @ApiProperty({
    description: 'Number of items to skip',
    default: 0,
  })
  @IsOptional()
  @Min(0)
  @Type(() => Number) //enableImplicitConversion: true in main.ts
  offset?: number;
}

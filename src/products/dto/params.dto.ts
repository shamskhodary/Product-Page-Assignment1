import { IsOptional, IsNumber } from 'class-validator';

export class PaginationParams {
  @IsNumber()
  @IsOptional()
  offset?: number;

  @IsNumber()
  @IsOptional()
  limit?: number;
}

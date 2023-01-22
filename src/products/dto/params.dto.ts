import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
export class PaginationParams {
  @Type(() => Number)
  @IsOptional()
  page?: number;
}

import { IsOptional, IsString } from 'class-validator';

export class QueryProductDto {
  @IsString()
  @IsOptional()
  category: string;
}

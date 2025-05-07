import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class skillsDto {
  @IsString()
  name: string;

  @IsEnum(['P', 'S', 'C'])
  @IsOptional()
  type?: 'P' | 'S' | 'C';

  @IsEnum(['Y', 'N'])
  @IsOptional()
  isActive?: 'Y' | 'N';

  @IsInt()
  @IsOptional()
  postby?: number | null;

  @IsString()
  @IsOptional()
  postip: string;

  @IsString()
  @IsOptional()
  postmac: string;

  @IsString()
  @IsOptional()
  postdatead: string;

  @IsString()
  @IsOptional()
  postdatebs: string;

  @IsString()
  @IsOptional()
  posttime: string;

  @IsString()
  @IsOptional()
  modifydatead: string;

  @IsString()
  @IsOptional()
  modifydatebs: string;

  @IsString()
  @IsOptional()
  modifytime: string;

  @IsInt()
  @IsOptional()
  modifyby?: number | null;

  @IsInt()
  @IsOptional()
  orgid?: number | null;
}

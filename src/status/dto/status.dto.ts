import { IsString } from 'class-validator';

export class statusDto {
  @IsString()
  name: string;

  @IsString()
  label: string;
}

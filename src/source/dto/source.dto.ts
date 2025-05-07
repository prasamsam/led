import { IsString } from 'class-validator';

export class sourceDto {
  @IsString()
  name: string;
}

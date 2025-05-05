import { IsOptional } from 'class-validator';

export class UpdateRoleDto {
  @IsOptional()
  roleName: string;
}

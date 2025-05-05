import { IsNotEmpty } from "class-validator";

export class RoleDto {
  @IsNotEmpty()
  roleName: string;
}

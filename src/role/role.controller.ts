import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Get()
  getRoles() {
    return this.roleService.getRole();
  }

  @Post()
  createRole(@Body() dto: RoleDto) {
    return this.roleService.createRole(dto);
  }

  @Post(':roleId/permissions')
  assignPermissions(
    @Param('roleId') roleId: number,
    @Body('permissionIds') permissionIds: number[],
  ) {
    return this.roleService.assignPermission(roleId, permissionIds);
  }

  @Patch(':roleId/permissions')
  updatePermission(
    @Param('roleId') roleId: number,
    @Body('permissionIds') permissionIds: number[],
  ) {
    return this.roleService.updatePermission(roleId, permissionIds);
  }
}

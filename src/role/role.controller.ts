import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';
import { UpdateRoleDto } from './dto/update-role-dto';

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

  @Put(':roleId')
  updateRole(
    @Param('roleId') roleId: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return this.roleService.updateRole(roleId, updateRoleDto);
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

  @Delete('/delete/:id')
  deleteRole(@Param('id') id: string) {
    return this.roleService.deleteRole(id);
  }
}

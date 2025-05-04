import { Body, Controller, Get, Post } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionDto } from './dto/permission.dto';

@Controller('permissions')
export class PermissionController {
  constructor(private permissionService: PermissionService) {}

  @Get()
  getPermissions() {
    return this.permissionService.getPermission();
  }

  @Post()
  createPermission(@Body() dto: PermissionDto) {
    return this.permissionService.createPermission(dto);
  }
}

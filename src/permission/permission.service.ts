import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from 'src/entity/permission.entity';
import { Repository } from 'typeorm';
import { PermissionDto } from './dto/permission.dto';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private permissionRepo: Repository<Permission>,
  ) {}

  async createPermission(dto: PermissionDto) {
    const { permissionName } = dto;
    const permission = this.permissionRepo.create({ permissionName });
    return await this.permissionRepo.save(permission);
  }

  async getPermission() {
    return await this.permissionRepo.find();
  }
}

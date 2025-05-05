import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entity/role.entity';
import { In, Repository } from 'typeorm';
import { RoleDto } from './dto/role.dto';
import { Permission } from 'src/entity/permission.entity';
import { UpdateRoleDto } from './dto/update-role-dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private roleRepo: Repository<Role>,
    @InjectRepository(Permission)
    private permissionRepo: Repository<Permission>,
  ) {}

  async createRole(dto: RoleDto) {
    const { roleName } = dto;

    const role = this.roleRepo.create({ roleName });
    const data = await this.roleRepo.save(role);
    return {
      status: 200,
      success: true,
      data: data,
    };
  }

  async updateRole(id: string, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepo.findOne({ where: { id: Number(id) } });
    if (!role) {
      throw new NotFoundException('Role Not Found.');
    }

    Object.assign(role, updateRoleDto);
    const data = this.roleRepo.save(role);

    return {
      status: 201,
      success: true,
      data: data,
    };
  }

  async getRole() {
    const role = await this.roleRepo.find();
    return {
      status: 200,
      success: true,
      data: role,
    };
  }

  async deleteRole(id: string) {
    const role = await this.roleRepo.findOne({ where: { id: Number(id) } });

    if (!role) {
      return {
        status: 404,
        success: false,
        message: 'Role not found.',
      };
    }

    role.permissions = [];
    await this.roleRepo.save(role);

    await this.roleRepo.delete(id);
    return {
      status: 200,
      success: true,
      message: 'Role deleted successully.',
    };
  }

  async assignPermission(roleId: number, permissionIds: number[]) {
    const role = await this.roleRepo.findOne({
      where: { id: roleId },
      relations: ['permissions'],
    });

    if (!role) {
      throw new Error('Role not found');
    }

    const existingPermissionIds = role.permissions.map((perm) => perm.id);

    const newPermissionIds = permissionIds.filter(
      (id) => !existingPermissionIds.includes(id),
    );

    if (newPermissionIds.length === 0) {
      return role;
    }

    const newPermission = await this.permissionRepo.findBy({
      id: In(newPermissionIds),
    });

    role.permissions = [...role.permissions, ...newPermission];
    await this.roleRepo.save(role);
    return role;
  }

  async updatePermission(roleId: number, permissionIds: number[]) {
    const role = await this.roleRepo.findOne({
      where: { id: roleId },
      relations: ['permissions'],
    });

    if (!role) {
      throw new NotFoundException('Role not found.');
    }

    const newPermissions = await this.permissionRepo.findBy({
      id: In(permissionIds),
    });

    role.permissions = newPermissions;

    return await this.roleRepo.save(role);
  }
}

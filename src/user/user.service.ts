import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/updateuser.dto';
import { Role } from 'src/entity/role.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Role) private roleRepo: Repository<Role>,
  ) {}

  async findById(id: number) {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: ['role', 'role.permissions'],
    });

    return user;
  }

  async getUsers() {
    const users = await this.userRepo.find({
      relations: ['role'],
    });
    return {
      status: 200,
      success: true,
      data: users,
    };
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({
      where: { id: Number(id) },
      relations: ['role'],
    });
    if (!user) {
      throw new NotFoundException('User not found.');
    }

    if (updateUserDto.roleId) {
      const role = await this.roleRepo.findOne({
        where: { id: updateUserDto.roleId },
      });

      if (!role) {
        throw new NotFoundException('Invalid Role');
      }
      user.role = role;
    }

    Object.assign(user, updateUserDto);
    const data = this.userRepo.save(user);
    return {
      status: 201,
      success: true,
      data: data,
    };
  }

  async deleteUser(id: string) {
    await this.userRepo.delete(id);
    return {
      status: 200,
      success: true,
      message: 'User Deleted Successfully.',
    };
  }
}

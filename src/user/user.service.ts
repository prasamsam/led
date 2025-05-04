import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

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
}

import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entity/role.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { SignupDto } from './dto/signup.dto';
import bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { JwtPayloadInterface } from './jwt-payload-interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Role) private roleRepo: Repository<Role>,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async signup(dto: SignupDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const role = await this.roleRepo.findOne({ where: { id: dto.roleId } });
    const user = this.userRepo.create({
      ...dto,
      password: hashedPassword,
      role: role || undefined,
    });
    const data = this.userRepo.save(user);
    return {
      status: 201,
      success: true,
      data: data,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.userRepo.findOne({
      where: { email: dto.email },
      relations: ['role', 'role.permissions'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    } else {
      const isPasswordMatch = await bcrypt.compare(dto.password, user.password);
      if (!isPasswordMatch) {
        throw new UnauthorizedException('Password did not match');
      } else {
        const token = this.jwtService.sign({
          id: user.id,
          role: {
            roleId: user.role.id,
            permissions: user.role.permissions,
          },
        });
        return {
          success: true,
          data: user,
          token: token,
        };
      }
    }
  }

  async validateUser(payload: JwtPayloadInterface) {
    const userId = Number(payload.id);
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}

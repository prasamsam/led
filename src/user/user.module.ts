import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { RoleModule } from 'src/role/role.module';
import { Role } from 'src/entity/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role]), RoleModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

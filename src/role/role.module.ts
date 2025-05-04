import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/entity/role.entity';
import { Permission } from 'src/entity/permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission])],
  providers: [RoleService],
  controllers: [RoleController],
  exports: [RoleModule],
})
export class RoleModule {}

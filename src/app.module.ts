import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Role } from './entity/role.entity';
import { Permission } from './entity/permission.entity';
import { CvController } from './cv/cv.controller';
import { CvModule } from './cv/cv.module';
import { Cv } from './entity/cv.entity';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { SourceController } from './source/source.controller';
import { SourceModule } from './source/source.module';
import { StatusController } from './status/status.controller';
import { StatusModule } from './status/status.module';
import { SkillsController } from './skills/skills.controller';
import { SkillsModule } from './skills/skills.module';
import { Source } from './entity/source.entity';
import { Status } from './entity/status.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'led',
      entities: [User, Role, Permission, Cv, Status, Source],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    UserModule,
    RoleModule,
    PermissionModule,
    CvModule,
    CategoryModule,
    SourceModule,
    StatusModule,
    SkillsModule,
    SourceModule,
  ],
  controllers: [
    AppController,
    CvController,
    CategoryController,
    SourceController,
    StatusController,
    SkillsController,
    SourceController,
  ],
  providers: [AppService],
})
export class AppModule {}

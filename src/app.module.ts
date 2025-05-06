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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'led',
      entities: [User, Role, Permission, Cv],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    UserModule,
    RoleModule,
    PermissionModule,
    CvModule,
  ],
  controllers: [AppController, CvController],
  providers: [AppService],
})
export class AppModule {}

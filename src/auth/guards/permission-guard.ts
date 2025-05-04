import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const requiredPermissions: string[] = this.getRequiredPermission(context);

    if (!user || !user.role || !user.role.permissions) {
      throw new ForbiddenException('User does not have permission.');
    }

    const hasPermission = Array.isArray(requiredPermissions)
      ? requiredPermissions.some((permission) =>
          user.role.permissions.some(
            (userPermission) => userPermission.permissionName === permission,
          ),
        )
      : user.role.permissions.some(
          (permission) => permission.permissionName === requiredPermissions,
        );

    if (!hasPermission) {
      throw new ForbiddenException('User does not have required permission.');
    }
    return true;
  }

  private getRequiredPermission(context: ExecutionContext): string[] {
    const requiredPermissions = this.reflector.get<string[]>(
      'requiredPermissions',
      context.getHandler(),
    );
    // const requiredPermissions = ['admin_only'];
    return requiredPermissions || [];
  }
}

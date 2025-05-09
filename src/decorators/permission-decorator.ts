import { SetMetadata } from '@nestjs/common';

export const Permissions = (...permissions: string[]) => {
  return SetMetadata('requiredPermissions', permissions);
};

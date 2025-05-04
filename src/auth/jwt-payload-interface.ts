export interface JwtPayloadInterface {
  id: number;
  role: {
    roleId: number;
    permissions: { id: number; permissionName: string }[];
  };
}

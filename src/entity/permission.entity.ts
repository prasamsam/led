import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  permissionName: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  role: Role[];
}

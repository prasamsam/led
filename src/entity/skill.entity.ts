import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cv_skills')
export class Skills {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  name: string;

  @Column({ type: 'enum', enum: ['P', 'S', 'C'], default: 'C' })
  type: 'P' | 'S' | 'C';

  @Column({ type: 'enum', enum: ['Y', 'N'], default: 'Y' })
  isActive: 'Y' | 'N';

  @Column({ type: 'int', nullable: true })
  postby: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  postip: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  postmac: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  postdatebs: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  postdatead: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  posttime: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  modifydatead: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  modifydatebs: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  modifytime: string;

  @Column({ type: 'int', nullable: true })
  modifyby: number;

  @Column({ type: 'int', nullable: true })
  orgid: number;

  @Column({ type: 'timestamp', default: null })
  created_at: Date;

  @Column({ type: 'timestamp' })
  updated_at: Date;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cv_job_category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', length: 11, nullable: true, default: null })
  industry_id: number;

  @Column({ type: 'varchar', length: 100, nullable: true, default: null })
  name: string;

  @Column({ type: 'enum', enum: ['Y', 'N'], default: 'Y' })
  isActive: 'Y' | 'N';

  @Column({ type: 'timestamp', default: null })
  created_at: Date;

  @Column({ type: 'int', length: 11, default: 0 })
  postby: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  postip: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  postmac: string;

  @Column({ type: 'timestamp', default: null })
  updated_at: Date;

  @Column({ type: 'varchar', length: 30, nullable: true })
  modifyip: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  modifymac: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  postdatead: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  postdatebs: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  posttime: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  modifydatead: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  modifydatebs: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  modifytime: string;

  @Column({ type: 'int', length: 11, nullable: true })
  modifyby: number;

  @Column({ type: 'int', length: 11, nullable: true, default: null })
  orgid: number;
}

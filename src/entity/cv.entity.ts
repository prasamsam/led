import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cv_seeker')
export class Cv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint', unsigned: true, default: 0 })
  ref_no: number;

  @Column({ type: 'varchar', length: 80, nullable: true })
  fullname: string;

  @Column({ type: 'int', nullable: true })
  gender: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  secondary_email: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  contact_no: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  secondary_contact_no: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  primary_skill: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  secondary_skill: string;

  @Column({ type: 'enum', enum: ['Y', 'N'], default: 'N', nullable: true })
  is_fresher: 'Y' | 'N';

  @Column({ type: 'varchar', length: 15, nullable: true })
  first_joining_datead: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  first_joining_databs: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  current_company: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  current_position: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  recently_applied_jobs: string;

  @Column({ type: 'int', nullable: true })
  level: number;

  @Column({ type: 'int', nullable: true })
  location: number;

  @Column({ type: 'int', nullable: true })
  industry: number;

  @Column({ type: 'int', nullable: true })
  category: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  source: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  facebook_url: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  linkedin_url: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  github_url: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  expected_salary: string;

  @Column({
    type: 'enum',
    enum: ['1', '2', '3', '4', '5', '6', '7', '8'],
    default: '8',
  })
  status: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  attachment: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  remarks: string;

  @Column({ type: 'mediumtext', nullable: true })
  pdf_content: string;

  @Column({ type: 'enum', enum: ['Y', 'N'], default: 'Y' })
  isActive: 'Y' | 'N';

  @Column({ type: 'timestamp' })
  created_at: Date;

  @Column({ type: 'int', nullable: true })
  postby: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  postip: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  postmac: string;

  @Column({ type: 'timestamp' })
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

  @Column({ type: 'int', nullable: true })
  modifyby: number;

  @Column({ type: 'int', nullable: true })
  orgid: number;

  @Column({ type: 'int', nullable: true })
  work_status: number;

  @Column({ type: 'bigint', nullable: true })
  approached_by: number;

  @Column({ type: 'varchar', nullable: true })
  approached_datead: string;

  @Column({ type: 'varchar', nullable: true })
  approached_datebs: string;

  @Column({ type: 'text', nullable: true })
  approached_remarks: string;

  @Column({ type: 'varchar', nullable: true })
  from: string;
}

import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

import { ApplicationV1 } from './application.model';

@Table({ tableName: 'preferred_jobs' })
export class PreferredJobV1 extends Model {
  @ForeignKey(() => ApplicationV1)
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  @ApiProperty()
  applicationId: string;

  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  @ApiProperty()
  job: string;
}

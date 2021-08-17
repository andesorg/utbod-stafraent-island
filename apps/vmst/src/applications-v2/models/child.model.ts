import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

import { ApplicationV2 } from './application.model';

@Table({ tableName: 'children' })
export class ChildV2 extends Model {
  @ForeignKey(() => ApplicationV2)
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
  nationalId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty()
  name: string;
}

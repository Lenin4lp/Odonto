import {
  Model,
  DataType,
  Table,
  Column,
  AutoIncrement,
  HasMany,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Appointment } from "./appointment.model";

@Table({
  tableName: "sede",
  timestamps: true,
})
export class Branch extends Model {
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: "id_sede",
    allowNull: true,
    unique: true,
  })
  branch_id!: number;

  @Column({
    type: DataType.STRING(50),
    field: "nombre_sede",
    allowNull: false,
  })
  branch_name!: string;

  @Column({
    type: DataType.STRING(200),
    field: "direccion_sede",
    allowNull: false,
  })
  branch_address!: string;

  @HasMany(() => Appointment)
  appointments!: Appointment[];
}

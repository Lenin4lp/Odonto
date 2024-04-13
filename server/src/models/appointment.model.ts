import {
  Model,
  DataType,
  Table,
  Column,
  BeforeCreate,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Patient } from "./patient.model";
import { User } from "./user.model";
import { Branch } from "./branch.model";

@Table({
  tableName: "cita",
  timestamps: true,
})
export class Appointment extends Model {
  @Column({
    type: DataType.STRING(15),
    primaryKey: true,
    field: "id_cita",
    allowNull: true,
    unique: true,
  })
  appointment_id!: string;

  @Column({
    type: DataType.STRING(10),
    field: "fecha",
    allowNull: false,
  })
  date!: string;

  @Column({
    type: DataType.STRING(5),
    field: "hora",
    allowNull: false,
  })
  time!: string;

  @Column({
    type: DataType.STRING(255),
    field: "descripcion",
    allowNull: true,
  })
  description!: string;

  @ForeignKey(() => Patient)
  @Column({
    type: DataType.STRING(10),
    field: "id_paciente",
    allowNull: false,
  })
  patient_id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING(10),
    field: "id_doctor",
    allowNull: false,
  })
  doctor_id!: string;

  @ForeignKey(() => Branch)
  @Column({
    type: DataType.INTEGER,
    field: "id_sede",
  })
  branch_id!: number;

  @BelongsTo(() => Patient)
  patient!: Patient;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Branch)
  branch!: Branch;
}

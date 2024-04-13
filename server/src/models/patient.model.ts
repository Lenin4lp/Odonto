import {
  Model,
  DataType,
  Table,
  Column,
  BeforeCreate,
  HasMany,
  HasOne,
  ForeignKey,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Appointment } from "./appointment.model";
import { eSS } from "./eSS.model";
import { PastMedicalHistory } from "./pastMedicalHistory.model";

@Table({
  tableName: "paciente",
  timestamps: true,
})
export class Patient extends Model {
  @Column({
    type: DataType.STRING(10),
    primaryKey: true,
    field: "id_paciente",
    allowNull: true,
    unique: true,
  })
  patient_id!: string;

  @Column({
    type: DataType.STRING(50),
    field: "nombres_paciente",
    allowNull: false,
  })
  patient_name!: string;

  @Column({
    type: DataType.STRING(50),
    field: "apellidos_paciente",
    allowNull: false,
  })
  patient_lastName!: string;

  @Column({
    type: DataType.INTEGER,
    field: "edad_paciente",
    allowNull: false,
  })
  patient_age!: number;

  @Column({
    type: DataType.STRING(1),
    field: "sexo_paciente",
    allowNull: false,
  })
  patient_gender!: string;

  @Column({
    type: DataType.STRING(40),
    allowNull: true,
    field: "correo_paciente",
    unique: true,
  })
  patient_email!: string;

  @HasMany(() => Appointment)
  appointments!: Appointment[];
}

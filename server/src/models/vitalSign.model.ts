import {
  Model,
  DataType,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { ClinicHistory } from "./clinicHistory.model";

@Table({
  tableName: "signo_vital",
  timestamps: true,
})
export class VitalSign extends Model {
  @Column({
    type: DataType.STRING(15),
    primaryKey: true,
    field: "id_signo_vital",
    allowNull: true,
    unique: true,
  })
  vitalSign_id!: string;

  @Column({
    type: DataType.DECIMAL(6, 2),
    allowNull: true,
    field: "presion_arterial",
  })
  bloodPressure!: number;

  @Column({
    type: DataType.DECIMAL(6, 2),
    allowNull: true,
    field: "frecuencia_cardiaca",
  })
  heartRate!: number;

  @Column({
    type: DataType.DECIMAL(6, 2),
    allowNull: true,
    field: "temperatura",
  })
  temperature!: number;

  @Column({
    type: DataType.DECIMAL(6, 2),
    allowNull: true,
    field: "frecuencia_respiratoria",
  })
  respiratoryRate!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    field: "observaciones",
  })
  observations!: string;

  @ForeignKey(() => ClinicHistory)
  @Column({
    type: DataType.STRING(15),
    field: "id_historia_clinica",
    allowNull: false,
  })
  history_id!: string;

  @BelongsTo(() => ClinicHistory)
  clinicHistory!: ClinicHistory;
}

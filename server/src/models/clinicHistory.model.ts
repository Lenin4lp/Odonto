import { Model, DataType, Table, Column, HasOne } from "sequelize-typescript";
import { VitalSign } from "./vitalSign.model";

@Table({
  tableName: "hitoria_clinica",
  timestamps: true,
})
export class ClinicHistory extends Model {
  @Column({
    type: DataType.STRING(15),
    primaryKey: true,
    field: "id_historia_clinica",
  })
  history_id!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "embarazo",
  })
  pregnancy!: boolean;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    field: "motivo_consulta",
  })
  reason!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    field: "enfermedad_actual",
  })
  current_illness!: string;

  @HasOne(() => VitalSign)
  vitalSign!: VitalSign;
}

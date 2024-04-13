import {
  Model,
  DataType,
  Column,
  ForeignKey,
  HasOne,
  Table,
  BelongsTo,
} from "sequelize-typescript";
import { Patient } from "./patient.model";

@Table({
  tableName: "antecedentes_medicos",
  timestamps: true,
})
export class PastMedicalHistory extends Model {
  @Column({
    type: DataType.STRING(10),
    primaryKey: true,
    field: "id_antecedentes_medicos",
    allowNull: true,
    unique: true,
  })
  pastMedicalHistory_id!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "alergia_antibiotico",
  })
  alergia_antibiotico!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "alergia_anestesia",
  })
  alergia_anestesia!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "hemorragia",
  })
  hemorragia!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "vih_sida",
  })
  vih_sida!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "tuberculosis",
  })
  tuberculosis!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "asma",
  })
  asma!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "diabetes",
  })
  diabetes!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "hipertension",
  })
  hipertension!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "enfermedad_cardiaca",
  })
  enfermedad_cardiaca!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "otro",
  })
  otro!: boolean;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    field: "descripcion",
  })
  description!: string;

  @ForeignKey(() => Patient)
  @Column({
    type: DataType.STRING(10),
    field: "id_paciente",
    allowNull: true,
  })
  patient_id!: string;

  @BelongsTo(() => Patient)
  patient!: Patient;
}

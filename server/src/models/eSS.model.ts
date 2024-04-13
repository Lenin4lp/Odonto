import {
  Model,
  DataType,
  Table,
  Column,
  ForeignKey,
  HasOne,
  BelongsTo,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Patient } from "./patient.model";

@Table({
  tableName: "eSE",
  timestamps: true,
})
export class eSS extends Model {
  @Column({
    type: DataType.STRING(10),
    primaryKey: true,
    field: "id_eSE",
    allowNull: true,
    unique: true,
  })
  eSS_id!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "labios",
  })
  labios!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "mejillas",
  })
  mejillas!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "maxilar_superior",
  })
  maxilar_superior!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "maxilar_inferior",
  })
  maxilar_inferior!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "lengua",
  })
  lengua!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "paladar",
  })
  paladar!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "piso",
  })
  piso!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "carrillos",
  })
  carrillos!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "glandulas_salivales",
  })
  glandulas_salivales!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "orofaringe",
  })
  orofaringe!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "atm",
  })
  atm!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    field: "ganglios",
  })
  ganglios!: boolean;

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
    allowNull: false,
  })
  patient_id!: string;

  @BelongsTo(() => Patient)
  patient!: Patient;
}

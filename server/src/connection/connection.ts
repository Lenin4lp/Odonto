import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import { User } from "../models/user.model";
import { Appointment } from "../models/appointment.model";
import { eSS } from "../models/eSS.model";
import { PastMedicalHistory } from "../models/pastMedicalHistory.model";
import { Patient } from "../models/patient.model";
import { ClinicHistory } from "../models/clinicHistory.model";
import { Branch } from "../models/branch.model";
import { VitalSign } from "../models/vitalSign.model";

export const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: process.env.DB_PASSWORD,
  port: 3306,
  models: [
    User,
    Appointment,
    Patient,
    eSS,
    PastMedicalHistory,
    ClinicHistory,
    Branch,
    VitalSign,
  ],
  database: "centrooral",
  sync: { alter: true },
});

export async function connectionDB() {
  try {
    await connection.sync();
    console.log("Base de datos sincronizada");
  } catch (error) {
    console.log(error);
  }
}

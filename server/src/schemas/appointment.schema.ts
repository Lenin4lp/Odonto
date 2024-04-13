import { z } from "zod";

export const registerAppointmentSchema = z.object({
  date: z
    .string({
      required_error: "La fecha es requerida",
    })
    .refine((value) => {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      return regex.test(value);
    }, "Fecha inválida"),
  time: z
    .string({
      required_error: "La hora es requerida",
    })
    .refine((value) => {
      const regex = /^(0\d|1\d|2[0-3]):([0-5]\d)$/;
      return regex.test(value);
    }, "Hora inválida"),
  description: z
    .string()
    .max(255, "La descripción debe tener como máximo 255 caracteres")
    .optional(),
});

export const updateAppointmentSchema = z.object({
  date: z
    .string()
    .refine((value) => {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      return regex.test(value);
    }, "Fecha inválida")
    .optional(),
  time: z
    .string()
    .refine((value) => {
      const regex = /^(0\d|1\d|2[0-3]):([0-5]\d)$/;
      return regex.test(value);
    }, "Hora inválida")
    .optional(),
  description: z
    .string()
    .max(255, "La descripción debe tener como máximo 255 caracteres")
    .optional(),
});

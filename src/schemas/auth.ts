import { z } from "zod";

export const signupSchema = z.object({
    name: z
      .string()
      .toLowerCase()
      .nonempty({ message: "O nome é obrigatório" })
      .transform((name) =>
        name
          .trim()
          .split(" ")
          .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(" ")
      ),
    email: z.string().email({ message: "Invalid email address" }),
    cpf: z.string().refine((value) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value), {
      message: "CPF inválido",
    }),
    password: z.string().min(8, { message: "Must be 8 or more characters long" }),
  });

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Must be 8 or more characters long" }),
  });
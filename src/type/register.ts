import { z } from "zod";

export const AuthShema = z.object({
  email: z
    .string()
    .email("Пожалуйста, введите корректный адрес электронной почты"),
  password: z
    .string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .max(20, "Пароль должен содержать максимум 128 символов"),
});
export type AuthFormType = z.infer<typeof AuthShema>;

export const RegisterShema = AuthShema.extend({
  login: z
    .string()
    .min(2, "Логин должен содержать минимум 2 символа")
    .max(40, "Логин должен содержать максимум 40 символов")
    .regex(
      /^[a-zA-Zа-яА-ЯёЁ0-9_-]+$/,
      "Логин может содержать только русские и латинские буквы, цифры, подчеркивание и дефис",
    ),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});
export type RegisterFormType = z.infer<typeof RegisterShema>;

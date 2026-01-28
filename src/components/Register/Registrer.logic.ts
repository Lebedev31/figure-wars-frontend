// Импортируем схемы валидации для регистрации и авторизации из типов
import { RegisterShema, AuthShema } from "../../type/register";
import z from "zod";
// Импортируем типы данных для форм регистрации и авторизации
import type {
  RegisterFormType,
  AuthFormType,
  UserResponse,
} from "../../type/register";
import type { MessageClient } from "../../type/general.type";
import { handleRequest } from "../../utils/generalFutncion";
import type { CustomOptions } from "../../utils/generalFutncion";
import { notification } from "../Notification/Notification.logic";
import { navigate } from "../../main";
// Тип для ключей полей формы регистрации (login, email, password, confirmPassword)
type InputNameRegistration = keyof RegisterFormType;
// Тип для ключей полей формы авторизации (email, password)
type InputNameAuth = keyof AuthFormType;

// Начальное состояние формы регистрации с пустыми значениями всех полей
// Содержит поля: логин, email, пароль и подтверждение пароля
export const registerState: RegisterFormType = {
  login: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// Начальное состояние формы авторизации с пустыми значениями
// Содержит только поля email и пароль
export const authState: AuthFormType = {
  email: "",
  password: "",
};

export function guardData<T>(
  data: T,
  schema: z.ZodTypeAny,
  refsError: Record<string, HTMLElement>,
): boolean {
  // Выполняем безопасную валидацию данных через Zod схему
  const validation = schema.safeParse(data);

  // Очищаем все ошибки перед новой проверкой
  Object.values(refsError).forEach((ref) => {
    ref.textContent = "";
  });

  // Если валидация прошла успешно
  if (validation.success) {
    return true;
  } else {
    // Если есть ошибки валидации
    const errors = validation.error.issues;

    // Проходим по каждой ошибке
    errors.forEach((item) => {
      // Получаем название поля, в котором произошла ошибка
      const fieldName = item.path[0] as string;

      // Если поле существует в объекте ошибок, выводим сообщение об ошибке
      if (fieldName && refsError[fieldName]) {
        refsError[fieldName].textContent = item.message;
      }
    });

    return false;
  }
}

export function handleNameInputRegistration(
  e: Event,
  state: RegisterFormType,
  name: InputNameRegistration,
) {
  // Приводим target к типу HTMLInputElement
  const target = e.target as HTMLInputElement;
  // Обновляем значение в состоянии на введённое значение
  state[name] = target.value;
}

export function handleNameInputAuth(
  e: Event,
  state: AuthFormType,
  name: InputNameAuth,
) {
  const target = e.target as HTMLInputElement;
  state[name] = target.value;
}

export function handleSubmitRegister(
  e: Event,
  data: RegisterFormType,
  errorRef: Record<string, HTMLElement>,
) {
  const returnOptions = (data: RegisterFormType): CustomOptions => {
    return {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 5000,
    };
  };

  const onSuccses = (data: MessageClient<UserResponse>) => {
    notification({
      text: "Регистрация прошла успешно, перейдите на страницу авторизации",
      type: "Succsses",
    });
  };

  const url = (import.meta.env.VITE_BACKEND as string) + "user/register";
  handleRequest<RegisterFormType, UserResponse, Record<string, HTMLElement>>(
    e,
    data,
    RegisterShema,
    url,
    onSuccses,
    guardData,
    errorRef,
    returnOptions(data),
  );
}

export function handleSubmitAuth(
  e: Event,
  data: AuthFormType,
  errorRef: Record<string, HTMLElement>,
) {
  const returnOptions = (data: AuthFormType): CustomOptions => {
    return {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 5000,
    };
  };

  const onSuccses = (data: MessageClient<UserResponse>) => {
    if (data.data) {
      const userString = JSON.stringify(data.data);
      localStorage.setItem("user", userString);
      navigate("/menu");
    }
  };

  const url = (import.meta.env.VITE_BACKEND as string) + "user/auth";
  handleRequest<AuthFormType, UserResponse, Record<string, HTMLElement>>(
    e,
    data,
    AuthShema,
    url,
    onSuccses,
    guardData,
    errorRef,
    returnOptions(data),
  );
}

// Импортируем схемы валидации для регистрации и авторизации из типов
import { RegisterShema, AuthShema } from "../../type/register";
// Импортируем типы данных для форм регистрации и авторизации
import type { RegisterFormType, AuthFormType } from "../../type/register";

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
  refsError: Record<string, HTMLElement>,
  schema: typeof RegisterShema | typeof AuthShema,
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
  // Приводим target к типу HTMLInputElement
  const target = e.target as HTMLInputElement;
  // Обновляем значение в состоянии на введённое значение
  state[name] = target.value;
}

export function handleSubmit<T>(
  e: Event,
  state: T,
  refsError: Record<string, HTMLElement>,
  schema: typeof RegisterShema | typeof AuthShema,
) {
  // Отменяем стандартную отправку формы (перезагрузку страницы)
  e.preventDefault();
  // Выполняем валидацию данных формы
  guardData(state, refsError, schema);
}

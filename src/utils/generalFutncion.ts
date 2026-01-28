import { z } from "zod";
import type { MessageClient } from "../type/general.type";
import { notification } from "../components/Notification/Notification.logic";

/**
 * TState   - Тип ваших данных (то, что лежит в state формы)
 * TResponse - Тип данных, которые придут от сервера в случае успеха
 * TValidatorArgs - Тип дополнительных аргументов для функции валидации
 */

export interface CustomOptions extends RequestInit {
  timeout?: number;
}

export async function handleRequest<TState, TResponse, TValidatorArgs>(
  e: Event,
  state: TState,
  schema: z.ZodType<any>,
  url: string,
  onSuccess: (data: MessageClient<TResponse>) => void,
  validator: (
    state: TState,
    schema: z.ZodType<any>,
    args: TValidatorArgs,
  ) => boolean,
  validatorArgs: TValidatorArgs,
  options: CustomOptions,
) {
  e.preventDefault();

  // 1. Валидация
  if (!validator(state, schema, validatorArgs)) return;

  const { timeout, ...fetchOptions } = options;

  const controller = new AbortController();
  let timer: ReturnType<typeof setTimeout> | null = null;

  if (timeout) {
    timer = setTimeout(() => controller.abort(), timeout);
  }

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });

    const result: MessageClient<TResponse> = await response.json();

    if (result.statusCode >= 200 && result.statusCode < 300) {
      onSuccess(result);
    } else {
      notification({ text: result.message, type: "Error" });
    }
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        notification({
          text: "Запрос на сервер не выполнился, время ожидания вышло",
          type: "Error",
        });
      } else {
        notification({ text: error.message, type: "Error" });
      }
    }
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export function getParseLocalStorageInfo<T>(name: string) {
  const info = localStorage.getItem(name);
  if (info) {
    return JSON.parse(info) as T;
  }
}

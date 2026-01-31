export type MessageClient<T> = {
  message: string;
  statusCode: number;
  data: T;
  meta: any;
};

export type ErrorMessageClient = {
  message: string;
  statusCode: number;
};

export interface Skill {
  name: string;
  description: string;
  src: string;
  effect: any; // Пока оставляем any, как ты и просил
}

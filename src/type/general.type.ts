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
